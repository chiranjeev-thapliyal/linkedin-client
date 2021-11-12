import { Jobs } from "../../assets/svg/Jobs";
import { JobAlerts } from "../../assets/svg/JobAlerts";
import { JobsSalary } from "../../assets/svg/JobsSalary";
import { JobsSkills } from "../../assets/svg/JobsSkills";
import { JobsInterview } from "../../assets/svg/JobsInterview";
import { JobsResume } from "../../assets/svg/JobsResume";
import { JobsSeeker } from "../../assets/svg/JobsSeeker";
import { JobsApplication } from "../../assets/svg/JobsApplication";

export const JobsNav = () => {


    return (
      <div className="jobsNavSubDiv">
        <div style={{ display: "flex" }}>
          <Jobs />
          <p>My Jobs</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobAlerts />
          <p>Job Alerts</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsSalary />
          <p>Salary</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsSkills />
          <p>Skill Assessments</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsInterview />
          <p>Interview Prep</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsResume />
          <p>Resume Builder</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsSeeker />
          <p>Job Seeker Guidance</p>
        </div>
        <div style={{ display: "flex" }}>
          <JobsApplication />
          <p>Application Settings</p>
        </div>
      </div>
    );
}