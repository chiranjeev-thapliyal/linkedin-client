import React, { useContext,useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardHeader from './CardHeader';
import Divider from './Divider';
import ProfileAccomplishmentCard from './ProfileAccomplishmentCard';

export default function ProfileAccomplishment({userDetails}) {
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
  const data = userDetails?.accomplishments;

  return data ? (
    <div className='ProfileAccomplishmentMainDiv PMD'>
      <CardHeader title={'Accomplishments'} image1={'icons/plusButton.svg'} />

      {data.map((e, i) => (
        <div>
          <ProfileAccomplishmentCard title={e.title} subTitle={e.subTitle} />

          <div className='ml2rem'>
            <br />
            {i < data.length - 1 ? <Divider /> : ''}
          </div>
        </div>
      ))}
    </div>
  ) : (
    ''
  );
}
