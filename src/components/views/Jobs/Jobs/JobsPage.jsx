import { PostJobs } from "../jobs_svg/PostJobs"
import { JobsNav } from "./JobsNav"
import jobsRightImage from "./images/JobsRightImage.PNG";
import { JobsRightContent } from "./JobsRightContent";

export const JobsPage = () => {

    return (
      <div className="jobsMainDiv">
        <div className="JobsSubDiv">
          <div className="jobsLeftMain">
            <div className="jobsLeftDiv">
              <JobsNav />
            </div>
            <div className="jobsNavBottom">
              <PostJobs className="postJobs" />
              <p>Post a free job</p>
            </div>
          </div>
          <div className="jobsRightMainDiv">
            <div className="jobsRightTop">
              <div >
                <p>Recent job searches</p>
                <p style={{color: "rgba(0, 0, 0, 0.6)"}}>clear</p>
              </div>
              <p>Software Developer</p>
              <p>India</p>
            </div>
            <div className="jobsRightDiv">
                <JobsRightContent />
            </div>
          </div>
          <div className="jobsRightImage">
            <img src={jobsRightImage} alt="" />
          </div>
        </div>
      </div>
    );
}