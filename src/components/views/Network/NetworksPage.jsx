import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { NetworksLeft } from './NetworksLeft';
import { NetworksRight } from './NetworksRight';

export const NetworksPage = () => {
  const { userDetails } = useContext(AuthContext);
  // const [userDetails, setUserDetails] = useState({});

  // useEffect(() => {
    // axios.get(`http://localhost:8080/profile`)
  // }, [])

  return userDetails && userDetails._id ? (
    <div className='NetworkWrapper'>
      <NetworksLeft userDetails={userDetails} />
      <NetworksRight userDetails={userDetails} />
    </div>
  ) : (
    ''
  );
};
