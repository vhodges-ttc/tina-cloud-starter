import React from 'react';
import JobDetails from "../../components/jobs/job_details";

const JobsPage = ({ job }) => {
  const divStyle = {
    padding: '10px'
  };
  return (
    <div style={divStyle}>
      <JobDetails job={job} />
    </div>
  );
};

export default JobsPage;

export async function getServerSideProps({ params }) {
  let job = {};
  try {
    const apiUrl = process.env.EMPLOY_END_POINT_BASE_URL;
    const jobId = params.jobid; // Extract the second parameter from the URL
    const response = await fetch(`${apiUrl}/job_details/${jobId}`);
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

