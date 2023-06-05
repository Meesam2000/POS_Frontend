import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";
import SubcForm from '../SubscriptionFolder/PaymentForm'
import DialogPopup from '../DialogPopup'


export default function Pricing() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [pricingModel, setPricingModel] = React.useState("");

  return (
    <Wrapper id="pricing" className="land">
      <div className="whiteBg">
        <div className="container-land">
          <HeaderInfo>
            <h1 className="font30 extraBold">Pick a plan wisely and Set up your store</h1>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="30,000 pkr/mo"
               
                //title="Starter"
                text=" Best for new ecommerce businesses with occasional in-person sales."
                offers={[
                  { name: "Expense Management", cheked: true },
                  { name: "Ease of Operation", cheked: true },
                  { name: "Inventory Counting/Stock Audits", cheked: true },
                  { name: "Customizable POS terminal", cheked: true },
                  { name: "24/7 support", cheked: true },
                ]}
                amount={30000}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="70,000 pkr/6mon"
                //title="Basic"
                text=" Best for growing businesses selling online or in-store."
                offers={[
                  { name: "Expense Management", cheked: true },
                  { name: "Ease of Operation", cheked: true },
                  { name: "Inventory Counting/Stock Audits", cheked: true },
                  { name: "Customizable POS terminal", cheked: true },
                  { name: "24/7 support", cheked: true },
                ]}
                amount={70000}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="1,20,000 pkr/year"
                //title="Golden"
                text="Best for scaling businesses that require advanced reporting."
                offers={[
                  { name: "Expense Management", cheked: true },
                  { name: "Ease of Operation", cheked: true },
                  { name: "Inventory Counting/Stock Audits", cheked: true },
                  { name: "Customizable POS terminal", cheked: true },
                  { name: "24/7 support", cheked: true },
                ]}
                amount={120000}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
      {modalOpen && (
        <DialogPopup
                    title1="Subscription Form"
                    formType="4" 
                    pricing1={pricingModel}        
                    setOpenModal={setModalOpen}
                ></DialogPopup>)}
    </Wrapper>
      
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`




