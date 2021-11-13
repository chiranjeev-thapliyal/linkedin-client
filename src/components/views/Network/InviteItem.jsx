import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import NetworksLink from '../../assets/svg/NetworksLink';

const InviteItem = ({ connection }) => {
  const { token } = useContext(AuthContext);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    axios
      .patch(
        `http://localhost:8080/users/accept-request`,
        {
          id: connection._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log('accepted', data);
      })
      .catch((e) => console.error('Failed to accept'));
  };

  return (
    <div className='inviteItems'>
      <img
        src={checkProfileImage(connection.profile_img)}
        height='50px'
        width='50px'
        alt=''
      />
      <div className='inviteDetails'>
        <p>
          <Link to={`/profile/${connection._id}`}>
            {toCapitalize(connection.first_name) +
              ' ' +
              toCapitalize(connection.last_name)}
          </Link>
        </p>
        <p>{connection.description}</p>
        <div style={{ display: 'flex' }}>
          {/* <NetworksLink /> */}
          {/* <p>{connection.common}</p> */}
        </div>
      </div>
      <div className='btnDiv'>
        <button className='ignoreBtn'>Ignore</button>
        <button onClick={handleAccept} className='acceptBtn'>
          Accept
        </button>
      </div>
    </div>
  );
};

export default InviteItem;
