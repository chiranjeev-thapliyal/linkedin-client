import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { toCapitalize } from '../../../utils/common.utils';

export default function ProfileFrontCardContents({ userDetails }) {
  const { userDetails: loggedUser, token, handleChat, messages } = useContext(AuthContext);
  const allMessages = messages?.[userDetails._id] || [];

  const [isPending, setIsPending] = useState(false)

  const fullName =
    toCapitalize(userDetails?.first_name) +
    ' ' +
    toCapitalize(userDetails?.last_name);

  let myToshikaLogo =
    'https://media-exp1.licdn.com/dms/image/C510BAQFeiuMjbTJsow/company-logo_100_100/0/1558501394727?e=1643846400&v=beta&t=QU5U_Tg8brsXHTbZH7yVu_SB_Ve38ewg-p6BlZjRYb0';
  let masaiLogo =
    'https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1643846400&v=beta&t=d2His-ud2lF1M0BeU4ByDKDTxJc5Zmrl13QDoBJDWIA';

  const isConnection = (friend) => {
    const total = loggedUser?.connections?.filter(({ _id }) => _id === friend._id);
    return total && total.length > 0;
  }

  const handleClick = (text) => {
    if (text === 'Pending') {
      return;
    }
    if (text === 'Connect') {
      axios.post('http://localhost:8080/users/send-request', {
        id: userDetails._id
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(({data}) => isPending(true)).catch(e => console.error('Connection request failed'))
    }else if (text === 'Message') {
      handleChat(userDetails, allMessages);
    } else {
      return;
    }
  }
  
  return loggedUser && loggedUser._id ? (
    <div className='ProfileFrontCardContents'>
      <div className='editButton flex-rowR editButtonMar'>
        <img src='/icons/editButton.svg' alt='edit' />
      </div>
      <div className='flex-sb'>
        <div class='PFCC-LeftPanel mt-15rem positionRelative'>
          <div className='PFCC-LeftPanelHeader'>
            <h1>{fullName || ''}</h1>
          </div>
          <div class='PFCC-LeftPanelSubHeader'>
            <h3>
              {userDetails.description ||
                `Learning MERN stack | Aspiring Full Stack Web Developer at Masai
              School, Bengaluru, Karnataka`}
            </h3>
          </div>
        </div>{' '}
        {/* PFCC-LeftPanel */}
        <div class='PFCC-RightPanel flex-col'>
          <div className='flex-row'>
            <img src={myToshikaLogo} alt='companyLogo' />
            <a href='#Experience'>Mytoshika IT Solutions</a>
          </div>
          <div className='flex-row'>
            <img src={masaiLogo} alt='educationLogo' />
            <a href='#Education'>Masai School</a>
          </div>
        </div>
      </div>
      <div class='PFCC-BottomPanel' style={{ marginTop: '0.5rem' }}>
        <div className='PFCC-BottomPanelAddress'>
          <p>
            {userDetails &&
              userDetails.city &&
              userDetails.state &&
              userDetails.city + ', ' + userDetails?.state}
            <span>Contact info</span>
          </p>
        </div>

        <div className='PFCC-BottomPanelConnection'>
          <div style={{ marginTop: '1rem' }}>
            <p>
              <span>{userDetails?.connections?.length} connections</span>
            </p>
          </div>
        </div>
        <div className='PFCC-BottomPanelButtons flex-row '>
          <button
            disabled={isPending}
            onClick={() => handleClick(isPending ? 'Pending' : isConnection(userDetails._id) ? 'Connect' : loggedUser._id === userDetails._id ? 'Open to' : 'Message')}
            style={{
              background: 'rgb(10, 102, 194) ',
              color: 'white',
              border: 'transparent',
            }}
          >
            {isPending ? 'Pending' : isConnection(userDetails._id) ? 'Connect' : loggedUser._id === userDetails._id ? 'Open to' : 'Message'}
          </button>
          <button>Add selection</button>
          <button>More</button>
        </div>

        <div className='PFCC-BottomPanelDiv  '>
          <h4>Open to work</h4>
          <p>
            Full Stack Developer · Full-stack Developer · Full Stack Engineer ·
            React Developer · Javascript Developer roles
          </p>

          <span>See all details</span>
        </div>
      </div>{' '}
      {/* PFCC-BottomPanel */}
    </div> //End of ProfileFrontCardContents
  ):'';
}
