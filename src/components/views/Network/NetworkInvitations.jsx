import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import NetworksLink from '../../assets/svg/NetworksLink';

// const inviteData = [
//   {
//     avatar:
//       'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
//     name: 'Rabia Basari',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
//   {
//     avatar:
//       'https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg',
//     name: 'Rabia Basari',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
//   {
//     avatar:
//       'https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=',
//     name: 'Chiranjeev Thapliyal',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
//   {
//     avatar:
//       'https://image.shutterstock.com/image-photo/young-happy-man-smiling-camera-260nw-307284695.jpg',
//     name: 'Himanshu Bisht',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
//   {
//     avatar:
//       'https://i.pinimg.com/originals/0f/29/93/0f2993a7b520ed79b47f6661d8f9e5d9.jpg',
//     name: 'Ali Shahanshah',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
//   {
//     avatar:
//       'https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
//     name: 'Anuj Sharma',
//     desc: 'Aspirining Full-stack Web Developer | Masai School',
//     common: 'Durga and 12 others',
//   },
// ];

import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import InviteItem from './InviteItem';

export const NetworkInvitations = ({ userDetails }) => {
  const { email } = useContext(AuthContext);
  const [invitesMore, setInvitesMore] = useState(false);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/email/${email}`)
      .then(({ data }) => {
        console.log('new data found', data);
        const filterReq = data.user.pendingReceived.filter((item) => {
          const notInConnections = data.user.connections.filter((connect) => {
            return item._id === connect._id
          })
          return (notInConnections && notInConnections.length > 0);
        })
        setPendingRequests([...filterReq]);
        // const filteredArray = data.user.pendingSent.filter((item) => {
        //   const filterConnectArray = data.user.connections.filter(
        //     (connect) => {
        //       return connect._id === item._id;
        //     }
        //   );
        //   if (filterConnectArray.length === 0) return item;
        // //   setPendingRequests([...filteredArray]);
        // });
      })
      .catch((e) => console.error('Error while getting pending requests'));
  }, []);

  return userDetails && pendingRequests ? (
    <div className='NetworkIvitationsMainDiv'>
      <div className='NetworkIvitationsDiv1'>
        <p>
          {pendingRequests.length === 0
            ? 'No pending invitations'
            : 'Invitations'}
        </p>
        <p>
          {pendingRequests.length === 0
            ? 'Manage'
            : `See all ${pendingRequests.length}`}
        </p>
      </div>
      {pendingRequests.map((connection, indx) => {
        return indx < 3 ? (
          <InviteItem connection={connection} />
        ) : invitesMore ? (
          <InviteItem connection={connection} />
        ) : null;
      })}
      {pendingRequests.length > 3 && (
        <button
          onClick={() => {
            setInvitesMore(!invitesMore);
          }}
          className='invitesMore'
        >
          {invitesMore ? 'Show Fewer' : 'Show More'}
        </button>
      )}
    </div>
  ) : (
    ''
  );
};
