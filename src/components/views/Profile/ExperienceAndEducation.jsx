import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from './Divider';
import ExperienceAndEducationCard from './ExperienceAndEducationCard';

export default function ExperienceAndEducation({ userDetails }) {
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

  const experienceData = userDetails?.experiences;

  const educationData = userDetails?.education;

  return experienceData?.length > 0 || educationData.length > 0 ? (
    <div className='ExperienceAndEducationMainDiv PMD'>
      {/* Experience section starts here */}
      {experienceData && (
        <div className='EAE-Experience'>
          <div className='ProfileActivityHeader flex-sb PAMD-Header editButton'>
            <h2>Experience</h2>
            <img src='/icons/plusButton.svg' alt='plusButton' />
          </div>

          {/* ExperienceCard */}
          <div className='EAE-CardMainDiv'>
            {experienceData.map((e, i) => (
              <div className='EAE-card' key={i}>
                <ExperienceAndEducationCard
                  imageUrl={
                    'https://media-exp1.licdn.com/dms/image/C4E0BAQGLRhmGrakSdg/company-logo_100_100/0/1519876168199?e=1645056000&v=beta&t=d3SFa1Y6LBF_iqdYwtfvtTEhIHpcB1H7vq-6MzhsKsE'
                  }
                  title={e.title}
                  subTitle={e.company}
                  timeDuration={e.end}
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
            <img src='/icons/plusButton.svg' alt='plusButton' />
          </div>

          {/* EducationCard */}
          <div className='EAE-CardMainDiv'>
            {educationData.map((e, i) => (
              <div className='EAE-card' key={i}>
                <ExperienceAndEducationCard
                  imageUrl={
                    e.logo ||
                    'https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1645056000&v=beta&t=JjNL57rVoRtoqISs1apSw0bMOTrUTr4rNCi31LJP1qE'
                  }
                  title={e.institution}
                  subTitle={e.course}
                  timeDuration={e.end}
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
