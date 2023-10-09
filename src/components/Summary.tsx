import React from "react";
import { useMultistepForm } from "../hook/useMultiStepForm";
import PlanForm from "./PlanForm";
interface ICart {
  title: string;
  price: number;
}

interface summaryProps {
  plan: string;
  isCurrentPlanYearly: boolean;
  price: number;
  cart: ICart[];
}

const Summary: React.FC<summaryProps> = ({
  isCurrentPlanYearly,
  plan,
  cart,
  price,
}) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Finishing up</h2>
      <span className='subtitle'>
        Double-check everything looks OK before confirming
      </span>
      <div className='additions-wrapper'>
        <div>
          <div className='plan-block'>
            <div>
              <span>{`${plan}(${
                isCurrentPlanYearly ? "Yearly" : "Monthly"
              })`}</span>
            </div>
            <h3 style={{ fontSize: "16px" }}>{`+$${
              isCurrentPlanYearly ? `${price * 10}/yr` : `${price}/mo`
            }`}</h3>
          </div>
          <h3>{}</h3>
        </div>
        {cart.map((item) => (
          <div className='additions-block'>
            <span>{item.title}</span>
            <h3>{`+$${
              isCurrentPlanYearly ? `${item.price * 10}/yr` : `${item.price}/mo`
            }`}</h3>
          </div>
        ))}
      </div>
      <div className='total-price'>
        <span>{`Total ${isCurrentPlanYearly ? "yearly" : "montly"}`}</span>
        <h3>{`+$${
          isCurrentPlanYearly
            ? `${
                cart.reduce((acc, num) => acc + num.price, 0) * 10 + price * 10
              }/yr`
            : `${cart.reduce((acc, num) => acc + num.price, 0) + price}/mo`
        }`}</h3>
      </div>
    </div>
  );
};

export default Summary;
