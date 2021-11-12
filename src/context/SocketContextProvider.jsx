import io from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const socket = io.connect('http://localhost:8080');
export const socketContext = createContext();


const SocketContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    socket.on('receive-message', (data) => {
      console.log(data);
    });
  }, [socket]);

  const changeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const values = {
    socket,
    email,
    changeEmail,
  };

  return (
    <socketContext.Provider value={values}>{children}</socketContext.Provider>
  );
};

export default SocketContextProvider;
