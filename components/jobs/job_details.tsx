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
      <strong>Job Details</strong>
      <ul>
        <li key={job.id}>
          <strong>Job Title: {job.title}</strong><br/>
          <strong>Job Description:</strong>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </li>

      </ul>
    </div>
  );
};

export default JobDetails;
