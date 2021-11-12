import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import CardHeader from './CardHeader';
import Divider from './Divider';
import ProfileAccomplishmentCard from './ProfileAccomplishmentCard';

export default function ProfileAccomplishment() {
  const { userDetails } = useContext(AuthContext);

  const data = userDetails?.accomplishments;

  return data ? (
    <div className='ProfileAccomplishmentMainDiv PMD'>
      <CardHeader title={'Accomplishments'} image1={'icons/plusButton.svg'} />

      {data.map((e, i) => (
        <div>
          <ProfileAccomplishmentCard title={e.title} subTitle={e.subTitle} />

          <div className='ml2rem'>
            <br />
            {i < data.length - 1 ? <Divider /> : ''}
          </div>
        </div>
      ))}
    </div>
  ) : (
    ''
  );
}
