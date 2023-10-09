import React from "react";
import { useState } from "react";

interface AdditionsProps {
  service: boolean;
  setService(action: boolean): void;
  storage: boolean;
  setStorage(action: boolean): void;
  profile: boolean;
  setProfile(action: boolean): void;
  isCurrentPlanYearly: boolean;
}

const Additions: React.FC<AdditionsProps> = ({
  service,
  setService,
  storage,
  setStorage,
  profile,
  setProfile,
  isCurrentPlanYearly,
}) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Pick add-ons</h2>
      <span className='subtitle'>Add-ons help enhance experience.</span>
      <div className='additions-wrapper'>
        <label className={service ? "active" : ""}>
          <input
            checked={service}
            type='checkbox'
            onChange={() => setService(!service)}
          />
          <div>
            <h3>Online service</h3>
            <span>Access to multiplayer games</span>
          </div>
          <span>{`+$${isCurrentPlanYearly ? "10" : "1"}/${
            isCurrentPlanYearly ? "yr" : "mo"
          }`}</span>
        </label>
        <label className={storage ? "active" : ""}>
          <input
            checked={storage}
            type='checkbox'
            onChange={() => setStorage(!storage)}
          />
          <div>
            <h3>Larger storage</h3>
            <span>Extra 1TB of cloud save</span>
          </div>
          <span>{`+$${isCurrentPlanYearly ? "20" : "2"}/${
            isCurrentPlanYearly ? "yr" : "mo"
          }`}</span>
        </label>
        <label className={profile ? "active" : ""}>
          <input
            checked={profile}
            type='checkbox'
            onChange={() => setProfile(!profile)}
          />
          <div>
            <h3>Customizeble Profile</h3>
            <span>Custom theme on your profile</span>
          </div>
          <span>{`+$${isCurrentPlanYearly ? "20" : "2"}/${
            isCurrentPlanYearly ? "yr" : "mo"
          }`}</span>
        </label>
      </div>
    </div>
  );
};

export default Additions;
