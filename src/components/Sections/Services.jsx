import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../LandingButtons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
export default function Services() {
  return (
    <Wrapper id="services" className="land" style={{marginTop:"-8%"}}>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container-land">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Features</h1>
            <p className="font15">
               Build, customize and manage your website on the go
              <br />
              Take full design control with flexible grids and custom breakpoints.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon={<PointOfSaleIcon></PointOfSaleIcon>}
                title="Expense Management"
                subtitle="With GPOS you can define different expense heads and manage these expenses on daily basis. On Day-end all these cash expenses are accounted for."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
               // icon="monitor"
                title="Ease of Operation"
                subtitle="GPOS is user friendly and very easy to use. Its intuitive interface and navigation structure enables the user to learn its operations in matter of minutes."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                title="Import And Export Of Data"
                subtitle="When you start your business through GPOS you can upload your data, like Items, quickly with the help of loaders. Similarly you export the reports from the system for external use."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox title="Inventory Counting / Stock Audits" subtitle="GPOS provides an easy way to carry out stock audits. Stock take can be done for the complete store or it can be partially done for selected inventory items. Available system stock can be hidden from the stock taker, if required." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox title="Customizable POS terminal" subtitle="Personalize your POS system to your business. Keep your most-used apps, discounts, and products at your fingertips so you can fly through checkout." />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
              title="Offline Sales" subtitle="If you want fast receipt generation and no dependence on the internet, then Offline Sales feature is the answer. The Sales screen works in the browser on the local device. The data sync takes place in the background and data is pushed to the database. So you can enjoy best of both worlds." />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
              title="24/7 support" subtitle="Reach customer service anytime through chat, phone or email." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container-land">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about GPOS</h4>
                <h2 className="font40 extraBold">A Study of Creativity and profitability</h2>
                <p className="font16">
                Put your brand into action—develop customer loyalty and promote your business on social.It sounds simple enough, but the setup can work in different ways, depending on whether you sell online, have a physical storefront, or both. A point-of-sale system used to refer to the cash register at a store.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;