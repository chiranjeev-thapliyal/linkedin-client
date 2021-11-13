import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardHeader from './CardHeader';
import ProfileDashboardBottom from './ProfileDashboardBottom';
import ProfileDashboardMid from './ProfileDashboardMid';

export default function ProfileDashBoard({userDetails}) {
  const { userDetails: loggedUser } = useContext(AuthContext);
  // const { userID } = useParams();
  // const [userDetails, setUserDetails] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/profile/${userID}`)
  //     .then(({ data }) => {
  //       console.log('data: ', data);
  //       setUserDetails({ ...data.profile });
  //     })
  //     .catch((e) => console.log('something went wrong'));
  // }, []);


  return loggedUser && loggedUser._id === userDetails._id ? (
    <div className='ProfileDashBoard PMD '>
      <CardHeader
        title='Your Dashboard'
        subTitle='Private to you'
        image1={'/icons/star.svg'}
        starTitle=' All Star'
      />

      <ProfileDashboardMid userDetails={userDetails}/>
      <ProfileDashboardBottom userDetails={userDetails}/>
    </div>
  ) : (
    ''
  );
}
