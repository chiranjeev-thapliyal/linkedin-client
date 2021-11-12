import Connection from './Connection';
import { useContext, useEffect, useState } from 'react';
import { socketContext } from '../../../context/SocketContextProvider';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import ChatBox from '../ChatBox/ChatBox';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4YWI5OTc0ZmJlMzFjMjM5MWU2ZGNiIiwiZW1haWwiOiJhQGEuY29tIn0sImlhdCI6MTYzNjU0NzU4NX0.MRXIYaALmDloIzPXNvw3fBhKMVrOfIiMs21FCC3kHmE',
  },
});

const Messenger = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const { email } = useContext(socketContext);
  const [open, setOpen] = useState(false);

  const [chats, setChats] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChat = (friend, messages) => {
    for (const temp of chats) {
      if (temp.key === friend._id) return;
    }

    if (chats.length === 4) {
      setChats(chats.splice(1, 1));
    }
    setChats([
      ...chats,
      <ChatBox key={friend?._id} friend={friend} messages={messages} />,
    ]);
  };

  useEffect(() => {
    instance
      .get(`/conversation/connections`)
      .then(({ data }) => {
        console.log(data);
        setUsers(data.users);
        setMessages(data.messages);
      })
      .catch((e) => console.log(e));
  }, [email]);

  return (
    <div className='messenger-chat-wrapper'>
      <div
        className={`messenger ${open ? 'messenger-open' : 'messenger-close'}`}
      >
        <Header handleClick={handleClick} user={''} open={open} />
        <Search />
        <div className='list'>
          {users?.map((user) => (
            <Connection
              handleChat={handleChat}
              key={user._id}
              user={user}
              messages={messages}
            />
          ))}
        </div>
      </div>
      {chats}
    </div>
  );
};

export default Messenger;
