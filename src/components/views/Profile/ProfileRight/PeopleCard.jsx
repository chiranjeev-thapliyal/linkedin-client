import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContextProvider';
import { Link } from 'react-router-dom';

export default function PeopleCard({
  connection,
  userDetails,
  text,
  imgUrl,
  name,
  title,
}) {
  const { token, handleChat, messages } = useContext(AuthContext);
  const allMessages = messages?.[connection._id] || [];

  const [pending, setPending] = useState(false);

  const isConnection = (friendID) => {
    const total = userDetails?.connections?.filter(
      ({ _id }) => friendID === _id
    );
    return total && total.length > 0;
  };

  if (title.length > 65) {
    title = title.slice(0, 65) + '...';
  }

  const handleClick = (text) => {
    if (text === 'Message') {
      console.log(text);
      handleChat(connection, allMessages);
    } else {
    }
  };

  return (
    <div className='PeopleCard PFCC-BottomPanelButtons'>
      <div className='flex-row'>
        <div>
          <img src={imgUrl} alt='peopleLogo' />
        </div>
        <div className='flex-col ml1rem'>
          <strong>
            <p>
              <a href={`/profile/${connection._id}`}>{name}</a>
            </p>
          </strong>
          <p className='small'>{title}</p>
          <button
            onClick={() =>
              handleClick(
                text === 'People also viewed' && isConnection(connection._id)
                  ? 'Message'
                  : 'Connect'
              )
            }
            className='btn-connection'
          >
            {text === 'People also viewed' && isConnection(connection._id)
              ? 'Message'
              : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
}
