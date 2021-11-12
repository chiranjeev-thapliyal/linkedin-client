import Connection from './Connection';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import ChatBox from '../ChatBox/ChatBox';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

const Messenger = () => {
  const { messenger: users } = useContext(AuthContext);
  // const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  // const [messages, setMessages] = useState({});
  const [open, setOpen] = useState(false);

  // Handler for messenger (open/close)
  const handleClick = () => {
    setOpen(!open);
  };

  const handleRemoveChat = (id) => {
    const newChats = chats?.filter(friend => friend._id !== id);
    setChats([...newChats]);
  };

  // Handler for active chat boxes
  const handleChat = (friend) => {
    for (const temp of chats) {
      if (temp.key === friend._id) return;
    }

    if (chats.length === 4) {
      setChats(chats.splice(1, 1));
    }

    setChats([...chats, friend]);
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
