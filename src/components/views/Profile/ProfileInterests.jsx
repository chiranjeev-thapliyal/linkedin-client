import React, { useContext,useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardHeader from './CardHeader';
import More from './More';
import ProfileInterestCard from './ProfileInterestCard';

export default function ProfileInterests( {userDetails}) {
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
  const data = userDetails?.interests;

  return data ? (
    <div className='ProfileInterestsMainDiv PMD'>
      <CardHeader title='Interests' />

      <div className='PI-CardBox  mt2rem'>
        <div className='PICB-ItemBox flex-wrap flex-sb'>
          {data.map((e, i) => (
            <div className='PICB-Items'>
              <ProfileInterestCard
                logo={e.logo}
                company={e.company}
                subTitle={e.subTitle}
                followers={e.followers}
              />

              {i % 2 !== 0 ? <br /> : ''}
              {<br />}
            </div>
          ))}
        </div>
      </div>
      {/* PI-CardBox  */}

      <More text={'See all'} />
    </div> // ProfileInterestsMainDiv
  ) : (
    ''
  );
}
