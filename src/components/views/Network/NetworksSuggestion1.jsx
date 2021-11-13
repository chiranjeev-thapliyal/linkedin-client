import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { NetworkSuggestionItem } from './NetworkSuggestionItem';

export const NetworkSuggestion1 = ({ heading1, userDetails }) => {
  const { token } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (
      userDetails &&
      userDetails.recommendations &&
      userDetails.recommendations.length < 7
    ) {
      axios
        .get(`http://localhost:8080/users/recommendations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log('data: ', data);
          const filteredRecommendation = data.recommendations.filter((item) => {
            let filteredArray = userDetails.connections.filter((connect) => {
              return connect._id === item._id;
            })

            let receivedFilterArray = userDetails.pendingReceived.filter((connect) => {
              return connect._id === item._id;
            })

            let sentFilterArray = userDetails.pendingSent.filter((connect) => {
              return connect._id === item._id;
            })

            console.log("recommends: ", userDetails, data, filteredArray, receivedFilterArray, sentFilterArray)

            if (item._id !== userDetails._id && filteredArray.length === 0 && sentFilterArray.length === 0 && receivedFilterArray.length === 0) return item;
          });
          setRecommendations([...filteredRecommendation]);
        })
        .catch((e) => console.error("Can't fetch recommendations"));
    }
  }, [userDetails]);

  return (
    <div className='NetSuggestion1'>
      <div className='NetSugHeading1'>
        <p>{heading1}</p>
        <p>See all</p>
      </div>
      <div className='NetSuggestionsAll'>
        {recommendations.map((connection, i) => {
          return (
            <div key={connection._id} className='NetworkSuggestions'>
              <NetworkSuggestionItem
                userDetails={userDetails}
                {...connection}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
