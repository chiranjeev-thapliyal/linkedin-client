import React from 'react'
import "../../../styles/components/_notification.scss";
import { BsThreeDots } from "react-icons/bs";
import { FiBellOff } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri"
function FeedList({ a }) {
    const [status, setStatus] = React.useState(false);
    console.log(a.image);
    const handleDots = (() => {
        // if (status === false) {
        //     setStatus(true)
        // }

      setStatus(!status);
    })
    
    return (
      <div className="feed-container">
        <div className="left-img-container">
          <div
            className="img-inner-container"
            style={{
              backgroundImage: `url(${a.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div className="middle-text-container">{a.text}</div>

        <div className="right-info-container">
          <div className="time-conatiner"> {a.time}</div>

          <div className="icon-container">
            <div className="threedotsicon-inner-container">
              <BsThreeDots style={{ margin: "4px" }} onClick={handleDots} />

              {status ? (
                <div
                  className="list-container"
                  onClick={() => setStatus(false)}
                >
                  <div className="delete-list-container">
                    <button>
                      {" "}
                      <RiDeleteBin5Line style={{ margin: "5px" }} />
                      &nbsp; &nbsp;{" "}
                      <span
                        style={{
                          marginTop: "3px",
                          fontSize: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        Delete
                      </span>
                    </button>
                  </div>
                  <div className="turnoff-list-container">
                    {" "}
                    <button>
                      {" "}
                      <FiBellOff
                        style={{
                          margin: "5px",
                        }}
                      />
                      &nbsp; &nbsp;{" "}
                      <span
                        style={{
                          marginTop: "3px",
                          fontSize: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        Turn off
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default FeedList
