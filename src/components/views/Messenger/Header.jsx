import MessengerEllips from '../../assets/svg/MessengerEllipsis';
import MessengerMessage from '../../assets/svg/MessengerMessage';
import MessengerUpArrow from '../../assets/svg/MessengerUpArrow';
import { useContext } from 'react';
import { AuthContext } from '../.../../../../Contexts/AuthContextProvider';

const Header = ({ handleClick, user, open }) => {
  const { userDetails } = useContext(AuthContext);

  return (
    <div className='header' onClick={handleClick}>
      <div className='messenger-left'>
        <div className='messenger-user-pic'>
          <img
            src={
              userDetails.profile_img ||
              'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q'
            }
            alt={
              userDetails.first_name && userDetails.last_name
                ? `${userDetails.first_name} ${userDetails.last_name}`
                : `user name`
            }
          />
          <div className='messenger-online-indicator'></div>
        </div>
        <h4 className='messenger-heading'>Messaging</h4>
      </div>
      <div className='messenger-right'>
        <button className='messenger-more-options'>
          <MessengerEllips />
        </button>
        <button className='messenger-more-options'>
          <MessengerMessage />
        </button>
        <button className={`messenger-more-options ${open && 'rotate-180'}`}>
          <MessengerUpArrow />
        </button>
      </div>
    </div>
  );
};

export default Header;
