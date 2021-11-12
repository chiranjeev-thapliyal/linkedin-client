import React from 'react';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';

const NewMessage = ({ msg }) => {
  console.log('msg: ', msg);
  const fullName = `${toCapitalize(msg?.sender?.first_name)} ${toCapitalize(
    msg?.sender?.last_name
  )}`;

  return (
    <li className='message-list__event'>
      {/* <time className='message-list__time-heading'>FRIDAY</time> */}
      <div className='msg-listitem'>
        <a href='#' className='msg-listitem__link'>
          <img
            src={checkProfileImage(msg?.sender?.profile_img)}
            alt='saumya rai'
          />
        </a>
        <div className='msg-group__meta'>
          <a href='#'>{fullName}</a>
          <time className='msg-group__timestamp'>2:44 PM</time>
        </div>

        <div className='listitem__message-bubble'>
          <div className='listitem__message-indicator'>
            <div className='listitem__message-content'>{msg?.message}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewMessage;
