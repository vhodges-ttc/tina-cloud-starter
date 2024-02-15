import React from 'react';
import JobsSearch from "../../components/jobs/jobs_search";

const JobsResultsPage = ({ jobs }) => {
  return (
    <div>
      <h1>Jobs Page</h1>
      <JobsSearch jobs={jobs} />
    </div>
  );
};

export default JobsResultsPage;

export async function getServerSideProps({params}) {
  const query = params.query
  let jobs = {};
  const slug = 'smraJqMp2skqO3yyu7BL5'
  const response = await fetch(`https://connect.app.jviqa.com/endpoint/${slug}/search_jobs?q=${query}`);
  jobs = await response.json();
  return {
    props: {
        jobs: jobs,
    },
  };
}

