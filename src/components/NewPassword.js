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

export default function NewPassword(props) {
    const formik = useFormik({
    initialValues: {
      password: '',  
      submit: null,
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().max(8).required('Password is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        if (props.token ==='1') {
          
          console.log(values.email);

          Axios.post("http://localhost:5000/account/updatePassword", {
                            password: values.password,
                            gmail: localStorage.getItem('email')

                        }).then((response) => {
                            if (response.data.auth) {
                              alert("your password has been updated successfully!!!")
                                console.log("Email chali gai ha check kro" + response.data);
                                props.next()
                            }
                            else {

                                console.log("Crcedentials Galt han");
                            }
                        })          
        }
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
                          error={Boolean(formik.touched.password && formik.errors.password)}
                          helperText={formik.touched.password && formik.errors.password}
                          label="Enter New Password"
                          name="password"
                          type="password"
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
