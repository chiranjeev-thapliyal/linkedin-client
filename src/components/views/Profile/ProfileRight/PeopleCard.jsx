import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContextProvider';

export default function PeopleCard({ user, btn, imgUrl, name, title }) {
  const { token, userDetails, setUserDetails } = useContext(AuthContext);
  const [pending, setPending] = useState(false);
  if (title.length > 65) {
    title = title.slice(0, 65) + '...';
  }

  useEffect(() => {
    if (userDetails) {
      const found = userDetails.pendingSent?.filter(
        (item) => item === user._id
      );
      if (found && found.length > 0) setPending(true);
    }
  }, [userDetails]);

  const handleSendRequest = () => {
    axios
      .post(
        'http://localhost:8080/users/send-request',
        {
          id: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        console.log('sent request');
        setPending(true);
        const newPending = userDetails.pendingReceived.filter(
          (item) => item._id !== user._id
        );
        setUserDetails({ ...userDetails, pendingReceived: [...newPending] });
      })
      .catch((e) => console.log('error while sending request!'));
  };

  return (
    <div className='PeopleCard PFCC-BottomPanelButtons'>
      <div className='flex-row'>
        <div>
          <img src={imgUrl} alt='peopleLogo' />
        </div>
        <div className='flex-col ml1rem'>
          <strong>
            {' '}
            <p>{name}</p>{' '}
          </strong>
          <p className='small'>{title}</p>
          <button onClick={handleSendRequest} className='btn-connection'>
            {pending ? 'Pending' : btn}
          </button>
        </div>
      </div>
    </div>
  );
}
