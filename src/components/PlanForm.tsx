import React from "react";
import IconArcade from "../icons/icon-arcade.svg";
import IconAdvanced from "../icons/icon-advanced.svg";
import IconPro from "../icons/icon-pro.svg";

interface PlanFormProps {
  isActive: string;
  setIsActive(action: string): void;
  isCurrentPlanYearly: boolean;
  setIsCurrentPlanYearly(action: boolean): void;
}

export const PlanForm: React.FC<PlanFormProps> = ({
  isActive,
  setIsActive,
  isCurrentPlanYearly,
  setIsCurrentPlanYearly,
}) => {
  const handleActiveCard = (active: string): void => {
    setIsActive(active);
  };

  const handleCurrentPlan = (action: boolean): void => {
    setIsCurrentPlanYearly(action);
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Select your plan</h2>
      <span className='subtitle'>
        You have the option of monthly or yearly billing.
      </span>

      <div className='rates'>
        <div
          onClick={() => handleActiveCard("Arcade")}
          className={isActive === "Arcade" ? "card active" : "card"}
        >
          <img src={IconArcade} alt='' />
          <div>
            <h3>Arcade</h3>
            <span>{isCurrentPlanYearly ? "$90/yr" : "$9/mo"}</span>
            {isCurrentPlanYearly ? <h4>2 months free</h4> : ""}
          </div>
        </div>

        <div
          onClick={() => handleActiveCard("Advanced")}
          className={isActive === "Advanced" ? "card active" : "card"}
        >
          <img src={IconAdvanced} alt='' />
          <div>
            <h3>Advanced</h3>
            <span>{isCurrentPlanYearly ? "$120/yr" : "$12/mo"}</span>
            {isCurrentPlanYearly ? <h4>2 months free</h4> : ""}
          </div>
        </div>

        <div
          onClick={() => handleActiveCard("Pro")}
          className={isActive === "Pro" ? "card active" : "card"}
        >
          <img src={IconPro} alt='' />
          <div>
            <h3>Pro</h3>
            <span>{isCurrentPlanYearly ? "$150/yr" : "$15/mo"}</span>
            {isCurrentPlanYearly ? <h4>2 months free</h4> : ""}
          </div>
        </div>
      </div>
      <div className='switch-wrapper'>
        <span>Monthly</span>
        <label className='switch'>
          <input
            checked={isCurrentPlanYearly}
            onClick={() => handleCurrentPlan(!isCurrentPlanYearly)}
            type='checkbox'
          />
          <span className='slider'></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default PlanForm;
