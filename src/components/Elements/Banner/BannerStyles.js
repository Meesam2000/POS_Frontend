
import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: 1px solid #070707;
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  border: 1px solid #070707;
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;

export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
text-align: left;
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #536895;
  color:white;
  padding: 0.75em 1.12em;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  
`;
export const Text = styled.p`
  max-height: 1180px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  text-align: left;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #000036;
  line-height: 3;
  margin-top: 0 !important;
  font-size: 40px;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 30px;
  }
  color: #000036;
`;