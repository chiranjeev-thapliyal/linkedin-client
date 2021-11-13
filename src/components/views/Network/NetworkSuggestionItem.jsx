import { useContext, useEffect, useState } from 'react';
import { MdDone } from 'react-icons/md';
import NetworksLink from '../../assets/svg/NetworksLink';
import NetworkCross from '../../assets/svg/NetworkCross';
import {
  checkCoverImage,
  checkProfileImage,
  toCapitalize,
} from '../../../utils/common.utils';
import axios from 'axios';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

export const NetworkSuggestionItem = ({
  _id,
  cover_img,
  profile_img,
  first_name,
  last_name,
  description,
  userDetails,
}) => {
  const [connect, setConnect] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const filterArray = userDetails.pendingSent.filter((item) => {
      return item._id === _id;
    });
    if (filterArray.length > 0) {
      setConnect(_id);
    }
  }, [token]);

  const handleConnect = (id, text) => {
    if (text === 'Pending') return;
    axios
      .post(
        'http://localhost:8080/users/send-request',
        {
          id: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => console.log('after sending: ', data))
      .catch((e) => console.error('Unsuccessful sent req'));
    setConnect(id);
  };

  return (
    <div className='NetSugItemDiv'>
      <div className='NetCrossDiv'>
        <NetworkCross className='netCross' />
      </div>
      <img className='bgDiv' src={checkCoverImage(cover_img)} alt='' />
      <img className='avatarImg' src={checkProfileImage(profile_img)} alt='' />
      <p className='NetSuggestionName'>
        <a href={`/profile/${_id}`}>
          {toCapitalize(first_name) + ' ' + toCapitalize(last_name)}
        </a>
      </p>
      <p className='NetSugesstionDesc'>{description}</p>
      <div className='NetcommonDiv'>
        {/* <NetworksLink /> */}
        {/* <p>{common}</p> */}
      </div>
      <button
        className='NetSuggestConnect'
        onClick={() => {
          handleConnect(_id, _id === connect.trim() ? 'Pending' : 'Connect');
        }}
      >
        {_id === connect.trim() ? (
          <>
            {' '}
            <MdDone /> Pending
          </>
        ) : (
          'Connect'
        )}
      </button>
    </div>
  );
};

// pending button color: rgb(94, 94, 94);
