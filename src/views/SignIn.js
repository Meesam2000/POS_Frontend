import React, { useState } from 'react';
import '../css/Signin.css';
import Axios from 'axios'
import { ErrorMessage, Field, Formik } from 'formik';
import { Form } from "react-bootstrap";
import * as Yup from 'yup';
import { Grid, Avatar, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import BasicAlerts from '../components/BasicAlert';
import { Link, useNavigate } from 'react-router-dom';





const registerValidationsSchema = Yup.object({
    email: Yup.string().email('*Invalid email address').required('*Required'),
    password: Yup.string()
        .min(4, "*Must be 4 characters or more")
        .max(8, '*Must be 8 characters or less')
        .required('*Required')
});
const initialValues = {
    email: '',
    password: ''
}




const Signin = () => {
    const [isAlert, setIsAlert] = useState(false)

    const history = useNavigate()

    const onSubmitHandler = ((values) => {
        Axios.post("http://localhost:5000/account/login", {
            username: values.email,
            password: values.password
        }).then((response) => {
            const { data } = response
            if (data.auth && data.token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.result))
                
                // to check login status
                // localStorage.getItem('token') != null

                // With every request, send token in header,
                // on server side, check token if valid

                //to logout
                // localStorage.setItem('token', null)
                alert("LogIn Successfully !!")
                window.location.href = '/dashboard'
                // console.log(response.data);
            }
            else if (!data.auth) {
                alert("Login Failed !!")
            }
        }).catch((error) => {
            console.log("Error aya hai");
        })
    })


    const avatarStyle = { backgroundColor: "rgba(13,21,96,255)" }
    const hStyle = { margin: "0px" }

    return (
        <div className="main1" >
            <div className="sub-main" style={{height:"105%",marginTop:"-35px",width:"105%"}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerValidationsSchema}
                    onSubmit={onSubmitHandler}
                >
                    {props => (

                        <Form style={{padding:"10px"}} onSubmit={props.handleSubmit} className="formStyle">

                            <Grid align="center" padding="0" margin="10px" vertical-align="top" width="105%">
                                <Avatar style={avatarStyle}>
                                    <LockOpenOutlinedIcon></LockOpenOutlinedIcon>
                                </Avatar>
                                <h6 className="head2" style={hStyle}>SignIn</h6>
                                <Typography variant='caption'>Please enter the correct credentials to Signin!</Typography>

                                <Field name="email">
                                    {({ field, form, meta }) => (
                                        <Form.Group controlId="email">
                                            <div style={{alignContent:"left"}} className="label"> <label style={{textAlign:"left"}} htmlFor="email">Email:</label> </div>

                                            <Form.Control type={'email'} className="textbox" autoComplete="off"
                                                value={field.value}
                                                placeholder="abc@xyz.com"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur} >
                                            </Form.Control>
                                            <div className="ErrorMessage1">
                                                <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
                                            </div>
                                        </Form.Group>
                                    )}
                                </Field>



                                <Field name="password">
                                    {({ field, form, meta }) => (
                                        <div>
                                            <Form.Group controlId="password">
                                                <div className="label"> <label htmlFor="password">Password:</label> </div>
                                                <Form.Control type={'password'} className="textbox" autoComplete="off"
                                                    value={field.value}
                                                    placeholder="Password"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}></Form.Control>
                                                <div className="ErrorMessage1">
                                                    <ErrorMessage name="password" render={msg => <div>{msg} </div>} />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    )}
                                </Field>

                                <div className="lower">
                                    <button className="butn1" type="submit" >SignIn</button>
                                </div>

                            </Grid>
                            <Link to="/ForgotPassword" >Forgot Password?</Link>

                        </Form>
                    )}
                </Formik>


            </div>
        </div>

    )
}

export default Signin;