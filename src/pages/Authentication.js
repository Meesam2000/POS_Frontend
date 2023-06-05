import React, { Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SignInandUPcontainer from '../Containers/SignINandUP'
import img from '../images/mainlogo.jpg'
import axios from 'axios';



function Authentication(props) {
    console.log("authentication pa aya ha");
    console.log(window.location.pathname);
    const myArray = window.location.pathname.split("/");

    console.log(myArray)

    if (myArray[3]) {
        console.log("token");
        axios.post('http://localhost:5000/account/confirm', { token: myArray[3] }).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <Fragment>
            <Container className="content shadow mb-5 rounded" fluid>
                <Row className="mycontent" fluid>
                    <Col className="systemview shadow-lg rounded">
                        <Image resizeMode={'cover'} className="pic img-responsive" src={img} rounded fluid></Image>
                    </Col>
                    <Col className="pages shadow-lg rounded">
                        <SignInandUPcontainer />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Authentication;