import React, { useContext,useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from './Divider';
import More from './More';
import SkillsAndEndorsementsCard from './SkillsAndEndorsementsCard';

export default function SkillsAndEndorsements( {userDetails}) {
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
  const data = userDetails?.endorsements;

  return data ? (
    <div className='SkillsAndEndorsementsMainDiv PMD'>
      <div className='SkillsAndEndorsementsHeader flex-sb  editButton'>
        <h2>Skills & endorsements</h2>

        <div className='flex-row'>
          <h3 style={{ marginTop: '1rem', cursor: 'pointer' }}>
            Add a new skill
          </h3>
          <img src='/icons/editButton.svg' alt='editButton' />
        </div>
      </div>
      {/* Skill quiz button */}
      <button className='quizButton'>Take skill quiz</button>
      {/* SkillsAndEndorsementsCard */}
      <div className='SkillsAndEndorsementsCardBox'>
        {data.map((e) => (
          <div>
            <SkillsAndEndorsementsCard
              title={e.title}
              num={'17'}
              fname={'Rishabh'}
            />
            <Divider />
          </div>
        ))}
      </div>{' '}
      {/* SkillsAndEndorsementsCardBox */}
      <More text={'Show more '} />
    </div> //SkillsAndEndorsementsMainDiv
  ) : (
    ''
  );
}
