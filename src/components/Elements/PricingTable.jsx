import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../LandingButtons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export default function PricingTable({ icon, price, title, text,  offers, action, amount=0 }) {

    
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:5000/account/checkout",
      { token, product: {price: 30000} }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      alert("Success! Check email for details");
      window.location.href = '/register'
    } else {
      alert("Something went wrong");
    }
  }

  let getIcon;
  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="radius6 shadow" style={{backgroundColor: "#e3e3e3"}}>
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
      <StripeCheckout
          amount={amount * 100}
          currency='PKR'
          token={handleToken}
          stripeKey="pk_test_51LAVHFJIPxss89qmJrmF47pZGOHYCat2pKAUEPTpXLgBw8oGJkRZEoVTBNFKntUdeLjbElBbVpuiWBPve7q0pcBh00p50qPdpw"
          >
        <FullButton title="Buy" action={action} />
          </StripeCheckout>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
