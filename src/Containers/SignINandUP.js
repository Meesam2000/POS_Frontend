import  {useState} from 'react'
import '../App.css'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Signin from '../views/SignIn'
import Signup from '../views/SignUp'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
const SignInandUPcontainer=()=>{
    const [value,setValue]=useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
    <Box sx={{ width: '100%' }}>
        <Tabs className='mytabs' value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab className='mytab1' style={{color:'${notify.color}', fontSize: '15px', marginRight: '0.5rem', fontWeight: 'bold'}} label="SIGN IN" fill/>
        <Tab className='mytab2' style={{color:'${notify.color}', fontSize: '15px', marginRight: '0.5rem', fontWeight: 'bold'}} label="SIGN UP" fill/>
        </Tabs>
        <TabPanel value={value} index={0}>
        <Signin></Signin>
       
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Signup></Signup>
        </TabPanel>
    </Box>
    )
};
export default SignInandUPcontainer;