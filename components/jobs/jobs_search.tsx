import React, {useEffect} from "react";

const JobsSearch = ({ jobs }) => {
    console.log(jobs, "jobs")
  return (
    <div>
      <h2>Job Details:</h2>
      <ul>
        {jobs.entries.map(job =>(<li key={job.id}>{job.title}</li>))}
      </ul>
    </div>
  );
};

export default JobsSearch;
