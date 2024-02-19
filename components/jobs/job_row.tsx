// import { makeStyles } from '@mui/styles';
// const JobRow = (props) => {
//   return (
//     <li>
//        <article className="card" key={props.id}>{props.title}</article>
//     </li>
//   )
// }

// export default JobRow;

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
// import { ListItemSecondaryAction } from '@mui/material';
// import Box from '@mui/system/Box';
import { Actions } from "../util/actions";
import Button from '@mui/material/Button';
// export default function CheckboxListSecondary() {
//   const [checked, setChecked] = React.useState([1]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };
const JobRow = (job) => {
  return (
    
    // <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   <ListItem
    //     key={job.id}
    //     disablePadding
    //   >
    //     <ListItemButton>
    //       <ListItemText id={job.id} primary={`Line item ${job.title}`} />
    //     </ListItemButton>
    //   </ListItem>
    // </List>
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