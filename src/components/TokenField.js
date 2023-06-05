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

export default function TokenField(props) {
    const formik = useFormik({
    initialValues: {
      token: '',  
      submit: null,
    },
    validationSchema: Yup.object().shape({
      token: Yup.string().max(5).required('Token is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        if (props.token==='2') { 
          Axios.post("http://localhost:5000/account/confirmToken", {
                            token: values.token,
                        
                        }).then((response) => {
                            if (response.data.auth) {
                                alert("please Enter your new password!!")
                                console.log("Token Match kr gia ha " + response.data);
                                props.next()
                            }
                            else {
                                
                              alert("Token is invalid!!")
                                console.log("Crcedentials Galt han");
                            }
                        })
            
        }
        // props.next();
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
                    <Grid container spacing={2} sx={{ maxWidth: 420 }}>
                      <Grid item xs={12}>
                        <TextField style={{ width:"70%", marginLeft:"45%", marginTop:"10%" }}
                          error={Boolean(formik.touched.token && formik.errors.token)}
                          helperText={formik.touched.token && formik.errors.token}
                          label="Enter Token"
                          name="token"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          variant="outlined"
                          
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
