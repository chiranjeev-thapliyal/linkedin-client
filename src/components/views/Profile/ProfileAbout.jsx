import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

export default function ProfileAbout() {
  const { userDetails } = useContext(AuthContext);

  let aboutTxt = userDetails?.about || '';

  const [initialTxt, setInitialTxt] = useState(aboutTxt.slice(0, 200));
  const [seemore, setSeemore] = useState('...see more');

  const handleClick = () => {
    setSeemore('');
    setInitialTxt(aboutTxt);
  };

  return aboutTxt ? (
    <div className='profileAboutMainDiv PMD'>
      {/* <h1>Testing profileAbout.jsx</h1> */}

      <div className='PAMD-Header flex-sb editButton'>
        <h2>About</h2>
        <img src='icons/editButton.svg' alt='editButton' />
      </div>

      <div className='aboutMePre'>
        <p>{initialTxt}</p>
        <div className='aboutSeeMore flex-rowR'>
          <span onClick={handleClick}>{seemore}</span>
        </div>
      </div>
    </div> // profileAboutMainDiv
  ) : (
    ''
  );
}
