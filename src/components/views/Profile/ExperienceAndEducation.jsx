import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import Divider from './Divider';
import ExperienceAndEducationCard from './ExperienceAndEducationCard';

export default function ExperienceAndEducation() {
  const { userDetails } = useContext(AuthContext);

  const experienceData = userDetails?.experience;

  const educationData = userDetails?.education;

  return experienceData || educationData ? (
    <div className='ExperienceAndEducationMainDiv PMD'>
      {/* Experience section starts here */}
      {experienceData && (
        <div className='EAE-Experience'>
          <div className='ProfileActivityHeader flex-sb PAMD-Header editButton'>
            <h2>Experience</h2>
            <img src='icons/plusButton.svg' alt='plusButton' />
          </div>

          {/* ExperienceCard */}
          <div className='EAE-CardMainDiv'>
            {experienceData.map((e, i) => (
              <div className='EAE-card' key={i}>
                <ExperienceAndEducationCard
                  imageUrl={e.imageUrl}
                  title={e.title}
                  subTitle={e.subTitle}
                  timeDuration={e.timeDuration}
                />
                {i < educationData.length - 1 ? (
                  <hr
                    className='shadowC divider'
                    style={{ marginLeft: '12%' }}
                  />
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* EAE-Experience */}
      <Divider />
      {/* Education section starts here */}
      {educationData && (
        <div className='EAE-Education'>
          <div className='ProfileActivityHeader flex-sb PAMD-Header editButton'>
            <h2>Education</h2>
            <img src='icons/plusButton.svg' alt='plusButton' />
          </div>

          {/* EducationCard */}
          <div className='EAE-CardMainDiv'>
            {educationData.map((e, i) => (
              <div className='EAE-card' key={i}>
                <ExperienceAndEducationCard
                  imageUrl={e.imageUrl}
                  title={e.title}
                  subTitle={e.subTitle}
                  timeDuration={e.timeDuration}
                />
                {i < educationData.length - 1 ? (
                  <hr
                    className='shadowC divider'
                    style={{ marginLeft: '12%' }}
                  />
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* EAE-Education */}
    </div>
  ) : (
    ''
  );
}
