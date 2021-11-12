import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

export default function ProfileDashboardMid() {
    const { userDetails } = useContext(AuthContext);
  const profileViews = userDetails?.profile_views || 0;
  const postViews = userDetails?.posts_views || 0;
  const searchViews = userDetails?.search_appearances || 0;

  return (
    <div>
      <div className='PD-MidBox  mt2rem '>
        <div className=' flex-sb'>
          <div className='mxw33 pd1rem'>
            <h1 className='lightBlueC weight300'>{profileViews}</h1>
            <p>Who viewed you profile</p>
          </div>

          <div className='flex-row mxw33'>
            {/* style={{ backgroundColor: "red" }} */}
            <div className='verticalLine'></div>
            <div className='PD-TextBox pd1rem'>
              <h1 className='lightBlueC weight300'>{postViews}</h1>
              <p>Post views</p>
            </div>
          </div>

          <div className='flex-row mxw33'>
            <div className='verticalLine'></div>
            <div className='PD-TextBox pd1rem'>
              <h1 className='lightBlueC weight300'>{searchViews}</h1>
              <p>Search appearances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
