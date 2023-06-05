import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../../components/Elements/Banner/Banner";
import axios from 'axios'

export default function FAQ() {
  const [faqs,setFaqs] = useState([])

  useEffect(()=>{
    getAllFaqs()
  },[])

  const getAllFaqs = async () => {
    await axios.get("http://localhost:5000/faq/getAllFaqs").then((response) => {
      if (response.data.status === 200) {
        setFaqs(response.data.result)
      }
      else {
        console.log(response.data);
        console.log("faqs ka data nai aya ");
      }
    })
  }



  return (
    <Wrapper id="FAQ" style={{marginTop:"-30px",color:"rgb(14, 25, 104)"}}>
      <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {faqs.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <br></br>
      <h5>
        Question not on the list? Contact out help desk for further enquiries
      </h5>
    </Banner>
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









