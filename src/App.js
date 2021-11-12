import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Contexts/AuthContextProvider';
import { Routes } from './Routes/Routes';

function App() {
  const { socket, email } = useContext(AuthContext);

  useEffect(() => {
    // update this id in the database
    axios
      .patch('http://localhost:8080/users/changeSocket', {
        email: email,
        socketId: socket.id,
      })
      .then(() => console.log('Successfully changed socket!'))
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
