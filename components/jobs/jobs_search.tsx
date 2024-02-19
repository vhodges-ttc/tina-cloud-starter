import React, {useEffect} from "react";
import { useTheme } from "../layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import JobRow from '../jobs/job_row'

const JobsSearch = ({ jobs }) => {
const theme = useTheme();
const jobs_count = jobs.entries.length
  return (
    <div>
      <Typography variant="h4"sx={{marginBottom: 5}}>{jobs_count} jobs found</Typography>
      <Box >
        <Divider sx= {{backgroundColor:"#3b3b3b", borderColor:"#3b3b3b"}} 
                   />
        {
          jobs.entries.map((job) => {return <JobRow key={job.id} {...job} />})
        }
      </Box>
  </div>
  );
};

export default JobsSearch;
