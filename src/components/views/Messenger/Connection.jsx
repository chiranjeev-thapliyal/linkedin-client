import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { toCapitalize } from '../../../utils/common.utils';

const Connection = ({ user, handleChat }) => {
  const { messages } = useContext(AuthContext);
  const allMessages = messages[user._id];
  const lastMessage = allMessages?.at(-1);
  return (
    <div
      className='connection'
      onClick={() => handleChat(user, messages[user._id])}
    >
      <div className='left'>
        <div className='profile-pic'>
          <img
            src={
              user.profile_img ||
              'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q'
            }
            alt={
              user?.first_name && user?.last_name
                ? `${user?.first_name} ${user?.last_name}`
                : `user name`
            }
          />
          <div className='online-status'></div>
        </div>
      </div>
      <div className='right'>
        <div className='row'>
          <h4 className='truncate'>{`${toCapitalize(
            user?.first_name
          )} ${toCapitalize(user?.last_name)}`}</h4>
          <time>Oct 30</time>
        </div>
        <div className='row conversation-body'>
          <span className='user-name'>
            {`${toCapitalize(lastMessage?.sender?.first_name)}:`}{' '}
          </span>
          {lastMessage?.message}
        </div>
      </div>
    </div>
  );
};

export default Connection;
