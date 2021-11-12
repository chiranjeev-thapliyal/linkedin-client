import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import CardHeader from './CardHeader';
import More from './More';
import ProfileInterestCard from './ProfileInterestCard';

export default function ProfileInterests() {
  const { userDetails } = useContext(AuthContext);

  const data = userDetails?.interests;

  return data ? (
    <div className='ProfileInterestsMainDiv PMD'>
      <CardHeader title='Interests' />

      <div className='PI-CardBox  mt2rem'>
        <div className='PICB-ItemBox flex-wrap flex-sb'>
          {data.map((e, i) => (
            <div className='PICB-Items'>
              <ProfileInterestCard
                imgUrl={e.imgUrl}
                title={e.title}
                subTitle={e.subTitle}
                followers={e.followers}
              />

              {i % 2 !== 0 ? <br /> : ''}
              {<br />}
            </div>
          ))}
        </div>
      </div>
      {/* PI-CardBox  */}

      <More text={'See all'} />
    </div> // ProfileInterestsMainDiv
  ) : (
    ''
  );
}
