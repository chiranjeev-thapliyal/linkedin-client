import axios from 'axios';
import { useContext, useEffect } from 'react';
import LoginForm from './components/common/LoginForm';
import Messenger from './components/views/Messenger/Messenger';
import { socketContext } from './context/SocketContextProvider';


function App() {

  const { socket, email } = useContext(socketContext);

  useEffect(() => {
    // update this id in the database
    axios.patch('http://localhost:8080/users/changeSocket', {
      email: email,
      socketId: socket.id
    }).then(data => console.log(data)).catch(err => console.log(err));
  }, [email])

  return (
    <div className='App'>
      <p>Linkedin Frontend</p>
      <LoginForm />
      <Messenger />
    </div>
  );
}

export default App;
