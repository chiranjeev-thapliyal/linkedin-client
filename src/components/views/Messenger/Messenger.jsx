import Connection from './Connection';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import ChatBox from '../ChatBox/ChatBox';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

const Messenger = () => {
  const { messenger: users, chats, setChats, handleRemoveChat, handleChat } = useContext(AuthContext);
  // const [users, setUsers] = useState([]);
  // const [messages, setMessages] = useState({});
  const [open, setOpen] = useState(false);

  // Handler for messenger (open/close)
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='messenger-chat-wrapper'>
      <div
        className={`messenger ${open ? 'messenger-open' : 'messenger-close'}`}
      >
        <Header handleClick={handleClick} user={''} open={open} />
        <Search />
        <div className='list'>
          {users?.map((user) => (
            <Connection handleChat={handleChat} key={user._id} user={user} />
          ))}
        </div>
      </div>
      {chats?.map((friend) => (
        <ChatBox
          key={friend?._id}
          handleRemoveChat={handleRemoveChat}
          friendId={friend?._id}
          friend={friend}
        />
      ))}
    </div>
  );
};

export default Messenger;
