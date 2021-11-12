import signupImage1 from './images/image1.svg';
import linkedin from './images/linkedin.png';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

export const Signup = () => {
  const { isAuth } = useContext(AuthContext);

  const [join, setJoin] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const history = useHistory();
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  
  if (isAuth) {
    return <Redirect to='/home' />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleJoin = () => {
    setJoin(!join);
  };

  const joinNow = async () => {
    // const { email, password, first_name, last_name } = user;
    try {
      let res = await axios.post(`http://localhost:8080/auth/register`, user);
      // setRegisterSuccess(true);
      handleLogin(res.data.token, res.data.email, res.data.id);
      history.push('/home');
    } catch (err) {
      setJoin(false);
      alert('User already exists');
      console.log(err);
    }
  };

  return (
    <div className='white-wrapper'>
      <div className='signupMainDiv'>
        <div className='signupNav'>
          <img src={linkedin} alt='' className='signupLogo' />
          <div>
            <button className='btn1'>Join now</button>
            <Link to='/login'>
              <button className='btn2'>Sign in</button>
            </Link>
          </div>
        </div>

        <div className='signupBody'>
          <div className='signupLeft'>
            <p className='signupHeading'>
              Welcome to your Professional community
            </p>
            <div>
              {!join && (
                <div className='joinNowDiv'>
                  <div className='relative'>
                    <input
                      type=''
                      // placeholder="Email or phone number"
                      name='email'
                      // value={user.email}
                      id='signup-email'
                      onChange={handleChange}
                    />
                    <label
                      className={`${
                        user?.email?.length > 0 && 'active-label'
                      } unselectable`}
                      htmlFor='signup-email'
                    >
                      Email or phone number
                    </label>
                  </div>
                  {/* <br /> */}
                  <div className='relative'>
                    <input
                      type='password'
                      // placeholder='Password'
                      name='password'
                      id='signup-password'
                      // value={user.password}
                      onChange={handleChange}
                    />
                    <label
                      className={`${
                        user?.password?.length > 0 && 'active-label'
                      } unselectable`}
                      htmlFor='signup-password'
                    >
                      Password (6+ characters)
                    </label>
                  </div>
                  {/* <p>Forgot Password?</p> */}
                  <p>
                    By clicking Agree & Join, you agree to the Linkedin{' '}
                    <span>
                      User <br />
                      Agreement, Privacy Policy
                    </span>{' '}
                    and <span>Cookie Policy.</span>
                  </p>
                  <button onClick={handleJoin}>Agree & Join</button>
                </div>
              )}
              {join && (
                <div className='continueDiv'>
                  <div className='relative'>
                    <input
                      type='text'
                      // placeholder='First name'
                      name='first_name'
                      id={`signup-first_name`}
                      // value={user.first_name}
                      onChange={handleChange}
                    />
                    <label
                      className={`${
                        user?.first_name?.length > 0 && 'active-label'
                      } unselectable`}
                      htmlFor='signup-first_name'
                    >
                      First Name
                    </label>
                  </div>
                  {/* <br /> */}
                  <div className='relative'>
                    <input
                      id={`signup-last_name`}
                      type='text'
                      // placeholder='Last name'
                      name='last_name'
                      // value={user.last_name}
                      onChange={handleChange}
                    />
                    <label
                      className={`${
                        user?.last_name?.length > 0 && 'active-label'
                      } unselectable`}
                      htmlFor='signup-last_name'
                    >
                      Last Name
                    </label>
                  </div>
                  <button onClick={joinNow}>Continue</button>
                </div>
              )}
            </div>
          </div>

          <div className='signupRight'>
            <img src={signupImage1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
