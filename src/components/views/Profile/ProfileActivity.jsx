import React, { useContext,useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProfileActivity({userDetails}) {
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

  const data = userDetails?.activity;

  return userDetails?.activity?.length > 0 ? (
    <div className='ProfileActivityMainDiv PMD'>
      <div className='ProfileActivityHeader flex-sb PAMD-Header editButton'>
        <h2>Activity</h2>
        {/* <img src="icons/editButton.svg" alt="editButton" /> */}
      </div>

      {userDetails?.activity?.length > 0 && (
        <>
          <div>
            <span className='linkblue'>288 followers</span>
          </div>
          <div className='flex-wrap flex-sb'>
            {data && data.map((e) => (
              <div className='PA-ActivityBox flex-row '>
                <div className='activityImages'>
                  <img src='demo.png' alt='activityImage' />
                </div>
                <div
                  className='flex-col cardText'
                  style={{ lineHeight: '2rem' }}
                >
                  <h3>NIce thought. I will also Apply 🤔 🙄</h3>
                  <p>MD ALI commented</p>
                </div>
              </div> // PA-ActivityBox
            ))}
          </div>

          <hr
            style={{ margin: '0px', marginTop: '2rem' }}
            className='shadowB divider'
          />

          <div className='seeAllActivities flex-c'>
            <h3> See all activities</h3>
          </div>
        </>
      )}
    </div> // ProfileActivity
  ) : (
    ''
  );
}
