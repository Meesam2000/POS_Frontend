import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import EmailField from './EmailField'
import NewPassword from './NewPassword';
import TokenField from './TokenField';
import {Link} from 'react-router-dom'


const steps = ['Enter Email', 'Enter Token', 'New Password'];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  

  

  

  return (
    <Box sx={{ width: '70%' }}>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Your Password is changed Successfully!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Link to="/register">Done</Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 ? ( <div > <EmailField next={handleNext} token="1" /> </div> ) : ( <div></div> ) 
          }
          {activeStep === 1 ? ( <div> <TokenField next={handleNext} token="2" /> </div> ) : ( <div></div> ) 
          }
          {activeStep === 2 ? ( <div> <NewPassword email={props.email} next={handleNext} token="1" /> </div> ) : ( <div></div> ) 
          }
        
            
        </React.Fragment>
      )}
    </Box>
  );
}
