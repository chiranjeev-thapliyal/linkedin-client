import { JobsNav } from "./JobsNav"


export const JobsPage = () => {

    return (
        <div className="jobsMainDiv">
            <div className="JobsSubDiv">
                <div className="jobsLeftDiv">
                    <JobsNav />
                </div>
                <div className="jobsRightDiv"></div>
            </div>
        </div>
    )
}