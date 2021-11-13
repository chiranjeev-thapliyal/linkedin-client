import React from 'react'
import '../../../styles/components/_notification.scss'
import FeedList from './FeedList'
import { NetworkFooter } from '../Network/NetworkFooter';
let data = [
  {
    name: "anuj sharma",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQF54_69AoZePg/profile-displayphoto-shrink_100_100/0/1602059304912?e=1641427200&v=beta&t=I24f1L2gY6v2ylgFtYFU4AZTrSKS-ZdoXYP8b7kIpTk",
    text: "Dr. AngShuMan Ghosh (Ph.D., MBA, BE)’s poll has closed: Which Indian city is the best for jobs and career?",
    time: "2h",
  },
  {
    name: "Prince Kumar",
    image:
      "https://media-exp1.licdn.com/dms/image/C5103AQF_icp1e1PdFw/profile-displayphoto-shrink_100_100/0/1517237746934?e=1641427200&v=beta&t=ZRWw4qWR9J7oPta-VDoDZ93u57WR5zTVCVIc71lCjx8",
    text: "Congratulate Prince Kumar for 3 years at Jio",
    time: "3h",
  },
  {
    name: "Rabia Basari",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEO7pLjGKh5mg/profile-displayphoto-shrink_100_100/0/1633099020898?e=1641427200&v=beta&t=1L6y0Ud-_KODPfieZo5InncTdZkCM8QS3t-9NI7Yvw0",
    text: "Rabia Basari, your new connection, shared a post you may be interested in.",
    time: "3h",
  },
  { name: "rahul goyal", image: "", text: "", time: "4h" },
  { name: "anuj sharma", image: "", text: "", time: "5h" },
  { name: "pooja tripathi", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
  { name: "anuj sharma", image: "", text: "", time: "5h" },
  { name: "pooja tripathi", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
  { name: "anuj sharma", image: "", text: "", time: "5h" },
  { name: "pooja tripathi", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
  { name: "rahul goyal", image: "", text: "", time: "5h" },
];
function Notification() {
    return (
      <div className="notification-container">
        <div className="inner-notification-container">
          
          {/* left portion */}
          <div className="left-notification-container">
            <div className="upper-container">
              <h3>Notifications</h3>
              <p>
                You’re all caught up! Check back later for new notifications
              </p>
            </div>
            <div className="down-container">
              <p>Improve your notifications</p>
              <a href="# " rel="noopener noreferrer" target="_blank">
                View settings
              </a>
            </div>
          </div>

          {/* middle-feed-portion */}
          <div className="middle-notification-container">

            {data.map((obj, index) => {
              return <FeedList key={index}a={obj}/>
            })}


          </div>

          {/* right footer */}

          <div className="right-footer-container"><NetworkFooter/></div>
        </div>
      </div>
    );
}

export default Notification
