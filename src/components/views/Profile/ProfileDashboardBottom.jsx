import React from 'react';
import Divider from './Divider';

export default function ProfileDashboardBottom() {
  return (
    <div className='ProfileDashboardBottom PD-BottomBox  mt2rem'>
      <div className='flex-col'>
        <div className='flex-row '>
          <div className='PDB-ImageBox'>
            <img src='/icons/creatorIcon.svg' alt='' />
          </div>

          <div className='flex-col ml1rem'>
            <p>
              <strong>Creator mode: </strong>
              <span>Off</span>
            </p>
            <p>
              Grow your audience and get discovered by highlighting content on
              your profile.
            </p>
          </div>
        </div>

        <div className='ml3rem mt1rem'>
          <Divider />
        </div>

        {/* My Network */}
        <div className='flex-row'>
          <div className='PDB-ImageBox'>
            <img src='/icons/myNetwork.svg' alt='' />
          </div>

          <div className='flex-col ml1rem'>
            <strong>
              {' '}
              <p>My Network</p>
            </strong>
            <p>Manage your connections, events, and interests.</p>
          </div>
        </div>
        <div className='ml3rem mt1rem'>
          <Divider />
        </div>

        {/* Salary */}
        <div className='flex-row '>
          <div className='PDB-ImageBox'>
            <img src='/icons/Salary.svg' alt='' />
          </div>

          <div className='flex-col ml1rem'>
            <strong>
              {' '}
              <p>Salary insights</p>
            </strong>
            <p>See how your salary compares to others in the community.</p>
          </div>
        </div>

        <div className='ml3rem mt1rem'>
          <Divider />
        </div>

        {/* MyItems */}
        <div className='flex-row'>
          <div className='PDB-ImageBox'>
            <img src='/icons/myItems.svg' alt='' />
          </div>

          <div className='flex-col ml1rem'>
            <strong>
              {' '}
              <p>My items</p>
            </strong>
            <p>Keep track of your jobs, courses and articles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
