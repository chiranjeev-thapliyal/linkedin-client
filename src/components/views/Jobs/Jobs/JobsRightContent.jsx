import { JobsHide } from '../jobs_svg/JobsHide';
import { JobsImportant } from '../jobs_svg/JobsImportant';
import { JobsRecruiting } from '../jobs_svg/JobsRecruiting';
import { useState } from 'react';

export const JobsRightContent = () => {
  const [hideIcon, setHideIcon] = useState(false);
  const jobsData = [
    {
      id: 1,
      image:
        'https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1645056000&v=beta&t=GQCAhBJWrUvKi2FCuKj6CspWqTp6OW_JQoKjQFr1fvc',
      jobTitle: 'Frontend Engineer',
      company: 'Amazon',
      location: 'Hyderabad, Telangana, India',
      promoted: 14,
    },
    {
      id: 2,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQE70FUW7w7FIw/company-logo_100_100/0/1519875641726?e=1645056000&v=beta&t=zc9wapp0BQxGi9sLpdyb9PADj1gzxhHEFCQE3dng6W0',
      jobTitle: 'React Native Developer',
      company: 'MRSOFT SOLUTIONS',
      location: 'Pune, Maharashtra, India',
      promoted: 13,
    },
    {
      id: 3,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQG_oY7LkqBPBA/company-logo_100_100/0/1622604168326?e=1645056000&v=beta&t=kd9H_FeELC46L6Tw5UNaMjCdLwh5rWCXqU5wLy-5V7A',
      jobTitle: 'React.js Application Developer',
      company: 'Accenture in India',
      location: 'Pune, Maharashtra, India',
      promoted: 5,
    },
    {
      id: 4,
      image:
        'https://media-exp1.licdn.com/dms/image/C4E0BAQEbeZUwSfPZXg/company-logo_100_100/0/1589294578581?e=1645056000&v=beta&t=p-2Ap9W-YHrSmIUMrEVHFJYOz5-EzFMWcp6mBiyKKKM',
      jobTitle: 'Full Stack Developer(React & Node.js)',
      company: 'Leap Metrics',
      location: 'Hyderabad, Telangana, India',
      promoted: 14,
    },
    {
      id: 5,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQFbPKpel0yyEQ/company-logo_100_100/0/1562580080407?e=1645056000&v=beta&t=O-6t-A09MTW-ZJaJly0edX95eUIZK7iWjCnZtPtIEVg',
      jobTitle: 'Jr Web Developer',
      company: 'Global University Systems',
      location: 'Hyderabad, Telangana, India',
      promoted: 25,
    },
    {
      id: 6,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQEaCflQO5G7Gw/company-logo_100_100/0/1625674113289?e=1645056000&v=beta&t=s_pJc4-dFSjmgAMn8iDgu9fODjpU9CdbAU4So1n4JA4',
      jobTitle: 'Software Developer II',
      company: 'Advanced Auto Parts',
      location: 'Pune, Maharashtra, India (On-site)',
      promoted: 8,
    },
    {
      id: 7,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQFK-ZuEYPrKqg/company-logo_100_100/0/1617428716605?e=1645056000&v=beta&t=dBOguqLQ7ai9i8zdYFjXF7F3aUUFaHlNX_CEcw93KSY',
      jobTitle: 'Senior NodeJs Developer',
      company: 'OneFitPlus',
      location: 'Hyderabad, Telangana, India (Hybrid)',
      promoted: 3,
    },
  ];

  const handleHideIcon = (id) => {
    setHideIcon(true);
  };

  return (
    <div className='jobsDivMain'>
      <p className='jobsDivHeading'>Recommended for you</p>
      <p>Based on your profile and search history</p>
      {jobsData.map((e, i) => {
        return (
          <div
            onMouseOver={() => handleHideIcon(e.id)}
            className='jobsContentDiv'
          >
            <div className='jobsDetails'>
              <img src={e.image} alt='' />
              <div className='jobDetailsDiv'>
                <p className='jobTitle'>{e.jobTitle}</p>
                <p style={{ marginTop: '0.5rem' }}>{e.company}</p>
                <p>{e.location}</p>
                <div className='recruiting'>
                  <JobsRecruiting />
                  <p>Actively recruiting</p>
                </div>
                <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  Promoted: {e.promoted} Applicants
                </p>
              </div>
            </div>
            <div className='jobsHideIcons'>
              {/* <span className={hideIcon ? "eyeball" : "showIcon"}>
                        <JobsHide className="hideIcon" />
                      </span> */}
              <JobsImportant className='impIcon' />
            </div>
          </div>
        );
      })}
    </div>
  );
};
