import logo2 from '../../images/default-avatar.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Profile.css'
import $ from 'jquery';
import axios from 'axios'

import {
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';


function readURL(input) {


  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result)
      let image = e.target.result

    };
    const obj = reader.readAsDataURL(input.files[0]);

  }
}
$(function () {
  $("#imgInp").change(function () {
    readURL(this);
  });
})
export const Profile = () => {
  const [profileImg, setProfileImg] = useState(null)
  const loginUser = JSON.parse(localStorage.getItem('user'))
  console.log(loginUser);

  const handleImage = (event) => {
    if (event.target.files.length > 0) {
      setProfileImg(event.target.files[0])
     ;
    }

  }
  const formik = useFormik({
    initialValues: {
      companyName: loginUser.company,
      email: loginUser.email,
      firstName: loginUser.fname,
      lastName: loginUser.lname,
      phone: loginUser.phone,
      oldpassword: 'admin',
      newpassword: '',
      submit: null,
    },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().max(20).required('Company name is required'),
      email: Yup.string().email('Must be a valid email').max(50).required('Email is required'),
      firstName: Yup.string().max(20).required('First Name is required'),
      lastName: Yup.string().max(20).required('Last Name is required'),
      phone: Yup.string().max(11).required('Phone No. is required'),
      oldpassword: Yup.string().max(8).required('Old Password is required'),
      newpassword: Yup.string().max(8),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);

      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const submitHandler = (event) => {
    event.preventDefault()

    var formData = new FormData();
    formData.append('company', event.target.companyName.value)
    formData.append('email', event.target.email.value)
    formData.append('firstName', event.target[1].value)
    formData.append('lastName', event.target.lastName.value)
    formData.append('phone', event.target.phone.value)
    formData.append('image', profileImg)

    axios.post("http://localhost:5000/account/updateProfile",
      formData
      , { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
        if (res.status === 200) {
          alert("profile updated")
        }
        else {
          alert("error occured");
        }
      })
      .catch(err => console.log("error Occured", err))
  }


  return (
    <>

      <Box
        sx={{
          backgroundColor: 'background.default',
          pb: 3,
          pt: 8,
        }}
      >
        <Container style={{width:'100%'}}>
          <Typography variant="h4" style={{ color: '#579DF2', paddingLeft: '3%', paddingBottom: '3%' }}>
            Profile
          </Typography>
          <Card variant="outlined" style={{ borderColor: 'white' }}>
            <Grid container >
              <Grid item md={4} xs={12}>
                <Typography color="textPrimary" variant="h6">
                  General
                </Typography>
              </Grid>
              <Grid item md={8} xs={12}>
                <form onSubmit={submitHandler}>
                  <div>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 3,
                      }}
                    >
                      <div className="picture-container" style={{ paddingTop: '20px', marginLeft: '20%' }}>
                        <div className="picture">
                          <img src={logo2} id="blah" className="picture-src" />
                          <input type="file" id="imgInp" name="Image" onChange={handleImage} required />
                        </div>
                        <h6>Choose Picture</h6>
                      </div>
                    </Box>
                    <Grid container spacing={2} sx={{ maxWidth: 420 }}>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                          label="First Name"
                          name="firstName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.lastName && formik.errors.lastName}
                          label="Last Name"
                          name="lastName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.email && formik.errors.email)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.email && formik.errors.email}
                          label="Email address"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="email"
                          value={formik.values.email}
                          variant="outlined"
                          disabled
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.companyName && formik.errors.companyName)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.companyName && formik.errors.companyName}
                          label="Company name"
                          name="companyName"

                          value={formik.values.companyName}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.phone && formik.errors.phone)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.phone && formik.errors.phone}
                          label="Phone"
                          name="phone"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          variant="outlined"
                        />
                      </Grid>
                      {formik.errors.submit && (
                        <Grid item xs={12}>
                          <FormHelperText error>{formik.errors.submit}</FormHelperText>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Button color="primary" size="large" type="submit" variant="contained" style={{ marginRight: '45%' }}>
                          Update
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Card>
          <Card variant="outlined" style={{ borderColor: 'white', marginTop: '4%' }}>
            <Grid container spacing={3} style={{ marginTop: '4%' }} >
              <Grid item md={4} xs={12}>
                <Typography color="textPrimary" variant="h6">
                  Change Password
                </Typography>
              </Grid>
              <Grid item md={8} xs={12}>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <Grid container spacing={2} sx={{ maxWidth: 420 }}>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.oldpassword && formik.errors.oldpassword)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.oldpassword && formik.errors.oldpassword}
                          label="Old Password"
                          name="oldpassword"
                          type="password"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(formik.touched.newpassword && formik.errors.newpassword)}
                          style={{ width: '50%', marginRight: '45%' }}
                          helperText={formik.touched.newpassword && formik.errors.newpassword}
                          label="New Password"
                          name="newpassword"
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
                        <Button color="primary" size="large" type="submit" variant="contained" style={{ marginRight: '45%' }}>
                          Change
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </>
  );

};
