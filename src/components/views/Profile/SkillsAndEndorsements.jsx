import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import Divider from './Divider';
import More from './More';
import SkillsAndEndorsementsCard from './SkillsAndEndorsementsCard';

export default function SkillsAndEndorsements() {
  const { userDetails } = useContext(AuthContext);
  const data = userDetails?.endorsements;

  return data ? (
    <div className='SkillsAndEndorsementsMainDiv PMD'>
      <div className='SkillsAndEndorsementsHeader flex-sb  editButton'>
        <h2>Skills & endorsements</h2>

        <div className='flex-row'>
          <h3 style={{ marginTop: '1rem', cursor: 'pointer' }}>
            Add a new skill
          </h3>
          <img src='icons/editButton.svg' alt='editButton' />
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
              num={e.num}
              fname={e.fname}
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
