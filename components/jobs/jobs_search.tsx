import React, {useEffect} from "react";
import JobRow from '../jobs/job_row'

const JobsSearch = ({ jobs }) => {
const jobs_count = jobs.entries.length
  return (
    <div>
      <p className="text-2xl mb-8">{jobs_count} jobs found</p>
      <div className="grid grid-cols-1 divide-y-2 divide-gray-800 border-y-2 border-gray-800">
        {
          jobs.entries.map((job) => {return <JobRow key={job.id} {...job} />})
        }
      </div>
      
  </div>
  );
};

export default JobsSearch;