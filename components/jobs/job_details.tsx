import React, {useEffect} from "react";

const JobDetails = ({ job }) => {
  // useEffect(() => {
  //   const slug = 'od00t90uXQkgIhffTVllz'
  //   const jobId = 4; // Extract the second parameter from the URL
  //   fetch(`https://connect.app.jvidev.localhost/endpoint/${slug}/job_details/${jobId}`).then(data => {
  //     console.log(data)
  //   });
  //}, []);
  return (
    <div>
      <h2>Job Details:</h2>
      <ul>
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.description}
          </li>

      </ul>
    </div>
  );
};

export default JobDetails;
