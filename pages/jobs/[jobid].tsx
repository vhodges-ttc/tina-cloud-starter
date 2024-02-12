import React from 'react';
import JobDetails from "../../components/jobs/job_details";

const JobsPage = ({ job }) => {

  return (
    <div>
      <h1>Jobs Page</h1>
      <JobDetails job={job} />
    </div>
  );
};

export default JobsPage;

export async function getServerSideProps({ params }) {
  let job = {};
  try {
    const slug = '4-2yUqBXSJEWBTY_k4E4L'
    const jobId = params.jobid; // Extract the second parameter from the URL
    const response = await fetch(`https://connect.app.jobvite.com/endpoint/${slug}/job_details/${jobId}`);
    console.log(response);
    job = await response.json();
    console.log(job);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      job,
    },
  };
}

