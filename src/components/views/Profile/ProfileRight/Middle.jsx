import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContextProvider';
import {
  checkProfileImage,
  toCapitalize,
} from '../../../../utils/common.utils';
import Divider from '../Divider';
import More from '../More';
import PeopleCard from './PeopleCard';

export default function Middle({ text }) {
  const { userDetails, token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  if (
    userDetails &&
    userDetails.recommendations &&
    userDetails.recommendations.length > 0
  ) {
    setData([...userDetails?.recommendations]);
  }

  useEffect(() => {
    if (!data || data.length < 10) {
      axios
        .get(`http://localhost:8080/users/recommendations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setData([...data.recommendations]);
        })
        .catch((e) =>
          console.log('error while getting recommendations {profile}')
        );
    }
  }, []);

  const isConnection = (friendID) => {
    const total = userDetails?.recommendations?.filter(
      ({ _id }) => friendID === _id
    );
    return total && total.length > 0;
  };

  return (
    <div className='userProfileRightMiddle UPR'>
      <div>
        <h3 className='weight600 black'>{text}</h3>
      </div>

      <div>
        {data &&
          data.map((e) => (
            <div className='peopleCardSingle mt2rem '>
              <PeopleCard
                btn={isConnection(e._id) ? 'Message' : 'Connect'}
                imgUrl={checkProfileImage(e.profile_img)}
                name={
                  toCapitalize(e.first_name) + ' ' + toCapitalize(e.last_name)
                }
                title={e.description || ''}
              />
            </div>
          ))}
      </div>
      <div className='mt1rem'>
        <Divider />
      </div>

      <div>
        <More text='Show more' />
      </div>
    </div>
  );
}
