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
  const { token, userDetails } = useContext(AuthContext);
  
  const [data, setData] = useState([]);
  const [connectionIDs, setConnectionIDs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/recommendations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData([...data.recommendations]);
      })
      .catch((e) => console.error('error getting recommendations'));
  }, [userDetails]);

  return (
    <div className='userProfileRightMiddle UPR'>
      <div>
        <h3 className='weight600 black'>{text}</h3>
      </div>

      <div>
        {data &&
          userDetails &&
          data.map((e) => (
            <div className='peopleCardSingle mt2rem '>
              <PeopleCard
                connection={e}
                userDetails={userDetails}
                text={text}
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
