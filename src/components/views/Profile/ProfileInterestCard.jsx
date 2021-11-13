import React from 'react';

export default function ProfileInterestCard({
  logo,
  company,
  subTitle,
  followers,
}) {
  return (
    <div className='ProfileInterestCard'>
      <div className='flex-row'>
        <div className='PIC-imageBox img5 mr1rem'>
          <img src={logo} alt='companyLogo' />
        </div>

        <div className='PIC-ContentBox flex-col cardText'>
          <h3>{company}</h3>
          {/* <p>{subTitle}</p> */}
          <p>{followers} followers</p>
        </div>
      </div>
    </div>
  );
}
