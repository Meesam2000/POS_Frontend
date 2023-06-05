import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function BasicAlerts(props) {
    
  return (
    <Stack sx={{ width: '100%', mt: 4 }} spacing={2} >
      <Alert severity={props.severity}>{props.message}</Alert>
    </Stack>
  );
}

export default BasicAlerts;