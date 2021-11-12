import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

export const AuthContext = createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  token: '',
  email: '',
  id: '',
  messenger: [],
  messenges: {},
  isAuth: Boolean,
});

export const AuthContextProvider = ({ children }) => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  const [isAuth, setIsAuth] = useState(loggedUser);
  const [token, setToken] = useState(loggedUser?.token || '');
  const [email, setEmail] = useState(loggedUser?.email || '');
  const [id, setID] = useState(loggedUser?.id || '');
  const [messenger, setMessenger] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [messages, setMessages] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [feedPosts, setFeedPosts] = useState([]);

  const socket = io.connect('http://localhost:8080');
  useEffect(() => {
    socket.on('connect', async () => {
      await axios.patch('http://localhost:8080/users/changeSocket', {
        email: email,
        socketId: socket.id,
      });
    });
  }, [email]);

  // Getting all previous messaged people
  useEffect(() => {
    if (token) {
      try {
        axios
          .get(`http://localhost:8080/conversation/connections`, {
            headers: { Authorization: 'Bearer ' + token },
          })
          .then(({ data }) => {
            setMessenger(data.users);
            setMessages(data.messages);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.log('Please enter correct token');
      }

      try {
        axios
          .get(`http://localhost:8080/users/email/${email}`)
          .then(({ data }) => {
            setUserDetails({ ...data.user });
          })
          .catch((e) => console.log('error while getting user'));
      } catch (e) {
        console.log('Please check email');
      }

      try {
        axios
          .get(`http://localhost:8080/posts`)
          .then(({ data }) => setFeedPosts([...data.posts]))
          .catch((e) => console.error(e));
      } catch (e) {
        console.log('error while getting posts');
      }
    }
  }, [token]);

  useEffect(() => {
    socket.on('receive-message', (data) => {
      console.log('getting message: ', data, messages);
      setNewMessage(data);
    });
  }, [socket]);

  const handleLogin = (token, email, id) => {
    setIsAuth(true);
    setToken(token);
    setEmail(email);
    setID(id);
    setNewMessage({});

    const loggedUser = { token, email, id };
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
  };

  const handleLogout = () => {
    setIsAuth(false);
    setToken('');
    setEmail('');
    setID('');
    setNewMessage({});
    localStorage.removeItem('loggedUser');
  };

  const handleNewPost = (post) => {
    setFeedPosts([post, ...feedPosts]);
  };

  const value = {
    handleLogin,
    handleLogout,
    handleNewPost,
    token,
    isAuth,
    email,
    id,
    socket,
    messages,
    messenger,
    newMessage,
    userDetails,
    feedPosts,
    setUserDetails,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
