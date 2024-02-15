const JobDetails = ({ job }) => {
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
