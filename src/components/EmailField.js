import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
} from '@material-ui/core';

export default function EmailField(props) {
    const formik = useFormik({
    initialValues: {
      email: '',  
      submit: null,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Must be a valid email').max(50).required('Email is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        if (props.token === '1') { 
          Axios.post("http://localhost:5000/account/forgotPassword", {
                            gmail: values.email,
                        }).then((response) => {
                            if (response.data.auth) {
                              alert("We have send you confirmation code Please check your email!!")
                                localStorage.setItem("email",values.email)
                                
                                props.next()
                            }
                            else {
                                
                                alert("Your email is not verified!!")
                        
                            }
                        }).catch((error)=>{
                          console.log("DB called");
                        })
                        // console.log(values.email + values.password);
            
        }
        //console.log(props.title);
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
      
    
    },
  });


  return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item md={8} xs={12}>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 3,
                      }}
                    >
                    </Box>
                    <Grid container spacing={2} sx={{ maxWidth: 420,marginLeft:"20%" }} >
                      <Grid item xs={12}>
                        <TextField style={{ width:"70%", marginLeft:"5%", marginTop:"15%" }}
                          error={Boolean(formik.touched.email && formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          label="Enter Email"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          variant="outlined"
                          type="email"
                        />
                      </Grid>
                      {formik.errors.submit && (
                        <Grid item xs={12}>
                          <FormHelperText error>{formik.errors.submit}</FormHelperText>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Button style={{marginLeft:'60%'}} color="primary" size="large" type="submit" variant="contained">
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Container>
    )
}
