import { Jobs } from "../jobs_svg/Jobs";
import { JobAlerts } from "../jobs_svg/JobAlerts";
import { JobsSalary } from "../jobs_svg/JobsSalary";
import { JobsSkills } from "../jobs_svg/JobsSkills";
import { JobsInterview } from "../jobs_svg/JobsInterview";
import { JobsResume } from "../jobs_svg/JobsResume";
import { JobsSeeker } from "../jobs_svg/JobsSeeker";
import { JobsApplication } from "../jobs_svg/JobsApplication";

export const JobsNav = () => {


    return (
      <div className="jobsNavSubDiv">
        <div className="jobNavItems">
          <Jobs className="jobsNavIcon" />
          <p>My Jobs</p>
        </div>
        <div className="jobNavItems">
          <JobAlerts />
          <p>Job Alerts</p>
        </div>
        <div className="jobNavItems">
          <JobsSalary />
          <p>Salary</p>
        </div>
        <div className="jobNavItems">
          <JobsSkills />
          <p>Skill Assessments</p>
        </div>
        <div className="jobNavItems">
          <JobsInterview />
          <p>Interview Prep</p>
        </div>
        <div className="jobNavItems">
          <JobsResume />
          <p>Resume Builder</p>
        </div>
        <div className="jobNavItems">
          <JobsSeeker />
          <p>Job Seeker Guidance</p>
        </div>
        <div className="jobNavItems">
          <JobsApplication />
          <p>Application Settings</p>
        </div>
      </div>
    );
}