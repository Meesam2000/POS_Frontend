import React , {useState} from 'react';
import '../css/Signup.css';
import Axios from 'axios'
import { ErrorMessage, Field, Formik } from 'formik';
import { Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from 'yup';
import { Grid, Avatar, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import BasicAlerts from '../components/BasicAlert';

// validations using yup
const registerValidationsSchema = Yup.object({
    first_name: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "*Only alphabets are allowed for this field ")
        .required('*Required'),
    last_name: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "*Only alphabets are allowed for this field ")
        .required('*Required'),
    email: Yup.string().email('*Invalid email address').required('*Required'),
    contact: Yup.number('*Must be Numbers')
        .min(11, '*Must be 11 characters')
        .required('*Required'),
    company: Yup.string()
        .required('*Required'),
    password: Yup.string()
        .min(4, "*Must be 4 characters or more")
        .max(8, '*Must be 8 characters or less')
        .required('*Required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], '*Confirm Password must match with Password')
        .min(4, "*Must be 4 characters or more")
        .max(8, '*Must be 8 characters or less')
        .required('*Required')
});


const Signup = () => {

    const avatarStyle = { backgroundColor: "rgba(13,21,96,255)", margin: "10px" }
    const hStyle = { margin: "0px" }
    const [isAlert, setIsAlert] = useState(false)
    let severity = ''
    let message = ''
    
    

    const initialValues={
        first_name: '',
        last_name: '',
        email: '',
        confirmpassword: '',
        password: '',
        contact: '',
        company: ''
    }
    const onSubmitHandler=(values => {

        Axios.post("http://localhost:5000/account/signup", {
            firstName: values.first_name,
            lastName: values.last_name,
            phone: values.contact,
            gmail: values.email,
            password: values.password,
            company: values.company
        }).then((response) => {
            

            if (response.data.status === 200) {
                alert("we have sent you an confirmation email. please check your email!!")
            }
            else if (response.data.status===400){
                
                alert("Something Went Wrong!!")
            }
        });
        console.log('values', values);
    })


    return (


        <div className="main1" >
            <div className="sub-main" style={{height:"110%",marginTop:"-35px",width:"150%"}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerValidationsSchema}
                    onSubmit={onSubmitHandler}
                >
                    {props => (

                        <Form style={{width:"80%"}} onSubmit={props.handleSubmit} className="formStyle">

                            <Grid align="center" margin="0" vertical-align="top">
                                <Avatar style={avatarStyle}>
                                    <AddCircleOutlineOutlinedIcon />
                                </Avatar>
                                <h6 className="head" style={hStyle}>SignUp</h6>
                                <Typography variant='caption'>Please fill this form to create an account!</Typography>
                                <Container>


                                    <Row className="frstrow" style={{width:"180%",marginLeft:"-40%",marginTop:"20px"}}>
                                        <Col className="col1 col-md-6">
                                            <Field name="first_name">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="first_name">
                                                            <div className="mylabel"> <label htmlFor="firstname">FirstName:</label></div>
                                                            <Form.Control type={'text'} className="textbox1"
                                                                value={field.value}
                                                                placeholder="FirstName"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}>
                                                            </Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage name="first_name" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                )}
                                            </Field>
                                        </Col>
                                        <Col className="col2 col-md-6">
                                            <Field name="last_name">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="last_name">
                                                            <div className="mylabel"> <label htmlFor="lastname">LastName:</label> </div>
                                                            <Form.Control type={'text'} className="textbox1"
                                                                autoComplete="off"
                                                                value={field.value}
                                                                placeholder="LastName"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}>
                                                            </Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage name="last_name" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>

                                                    </div>
                                                )}
                                            </Field>
                                        </Col>
                                    </Row>




                                    <Row className="row2" style={{width:"180%",marginLeft:"-40%"}}>
                                        <Col className="col col-md-6">

                                            <div>
                                                <Field name="email">
                                                    {({ field, form, meta }) => (
                                                        <Form.Group controlId="email">
                                                            <div className="mylabel"> <label htmlFor="email">Email:</label> </div>
                                                            <Form.Control type={'email'} className="textbox1" autoComplete="off"
                                                                value={field.value}
                                                                placeholder="abc@xyz.com"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur} >
                                                            </Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage className="ErrorMessage1" name="email" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    )}
                                                </Field>
                                            </div>
                                        </Col>

                                        <Col className="col1 Col-md-6">
                                            <Field name="contact">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="contact">
                                                            <div className="mylabel"> <label htmlFor="contact">Contact Number:</label> </div>
                                                            <Form.Control type={'number'} className="textbox1" autoComplete="off"
                                                                value={field.value}
                                                                placeholder="Contact must be numbers{0-9}"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}></Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage className="ErrorMessage1" name="contact" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                )}
                                            </Field>
                                        </Col>
                                    </Row>


                                    <Row className="row4" style={{width:"180%",marginLeft:"-40%"}}>
                                        <Col className="col1 Col-md-6">
                                            <Field name="password">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="password">
                                                            <div className="mylabel"> <label htmlFor="password">Password:</label> </div>
                                                            <Form.Control type={'password'} className="textbox1" autoComplete="off"
                                                                value={field.value}
                                                                placeholder="Password"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}></Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage className="ErrorMessage1" name="password" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                )}
                                            </Field>
                                        </Col>

                                        <Col className="col2 Col-md-6">
                                            <Field name="confirmpassword">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="confirmpassword">
                                                            <div className="mylabel"> <label htmlFor="confirmpassword">Confirm Password:</label> </div>
                                                            <Form.Control type={'password'} className="textbox1" autoComplete="off"
                                                                value={field.value}
                                                                placeholder="Password"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}></Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage className="ErrorMessage1" name="confirmpassword" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                )}
                                            </Field>
                                        </Col>
                                    </Row>
                                    <Row style={{width:"180%",marginLeft:"-40%"}}>
                                        <Col className="Col2 Col-md-12">
                                            <Field name="company">
                                                {({ field, form, meta }) => (
                                                    <div>
                                                        <Form.Group controlId="company">
                                                            <div className="mylabel"> <label htmlFor="company">Company Name:</label> </div>
                                                            <Form.Control type={'text'} className="textbox2" autoComplete="off"
                                                                value={field.value}
                                                                placeholder="Company"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}>

                                                            </Form.Control>
                                                            <div className="ErrorMessage1">
                                                                <ErrorMessage className="ErrorMessage1" name="company" render={msg => <div>{msg} </div>} />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                )}
                                            </Field>
                                        </Col>
                                    </Row>
                                </Container>
                                <div style={{width:"90%",justifyContent:"centre"}}>
                                <br></br><br></br><br></br><br></br><br></br>
                                    <button className="btn1" type="submit">SignUp</button>
                                </div>

                            </Grid>
                            {isAlert ? <BasicAlerts severity={severity} message={message}></BasicAlerts> : '' }
                        </Form>
                    )}
                </Formik>


            </div>
        </div>

    )
}

export default Signup;