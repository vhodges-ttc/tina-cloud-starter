import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import Button from '@mui/material/Button';
const JobRow = (job) => {
  return (
    <List sx={{ width: '100%'}}>
      <ListItem alignItems="flex-start" key={job.id} 
        secondaryAction={
          <ListItemButton component="a" href="">
            <ListItemText
              primary={
                // <Link href={`/jobs/${job.id}`}>
                    <Button variant="contained">Job Details</Button> 
                // </Link>
            }/>
          </ListItemButton>
        }>
        <ListItemText
          primary = {
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body1"
                color="white"
              ><strong>{job.title}</strong>
              
              </Typography>
          }
          secondary={
              <Typography
                sx={{ marginTop: 2}}
                variant="body2"
                color="white"
              >
              {job.location.country}
              </Typography>
          }
        />
      </ListItem>
      <Divider sx= {{backgroundColor:"#3b3b3b", borderColor:"#3b3b3b"}} component="li" 
                  />
    </List>
    );
}

export default JobRow;