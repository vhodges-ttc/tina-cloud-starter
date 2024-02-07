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
    const slug = 'od00t90uXQkgIhffTVllz'
    const jobId = params.jobid; // Extract the second parameter from the URL
    const response = await fetch(`http://0.0.0.0:4500/endpoint/${slug}/job_details/${jobId}`);
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

