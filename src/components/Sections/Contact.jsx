import React, { useRef } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import axios from "axios";

export default function Contact() {
  const name = useRef('')
  const email = useRef('')
  const subject = useRef('')
  const body = useRef('')

  function submitHandler() {
    const tempName = name.current.value
    const tempEmail = email.current.value
    const tempSubject = subject.current.value
    const tempBody = body.current.value

    // console.log(tempName, tempEmail, tempSubject, tempBody);
    axios.post("http://localhost:5000/faq/addQuestion",
      {name:tempName,email:tempEmail,subject:tempSubject,body:tempBody}
    , ).then(res => {
        if (res.status === 200) {
          alert("faq added")
        }
        else {
          alert("error occured");
        }
      })
      .catch(err => console.log("error Occured", err))

  }

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container-land">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              All of knowledge just at your fingertips. Ask Questions
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form style={{ width: "100%" }}>
                <label className="font13" style={{ marginRight: "80%" }}>First name:</label>
                <input type="text" id="fname" name="fname" ref={name} required className="font20 extraBold land" />
                <label className="font13" style={{ marginRight: "85%" }}>Email:</label>
                <input type="text" id="email" name="email" ref={email} required className="font20 extraBold land" />
                <label className="font13" style={{ marginRight: "85%" }}>Subject:</label>
                <input type="text" id="subject" name="subject" ref={subject} required className="font20 extraBold land" />
                <textarea rows="4" cols="50" type="text" id="message" required name="message" ref={body} className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" onClick={submitHandler} className="pointer animate radius8" style={{ maxWidth: "220px", backgroundColor: "#152245" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









