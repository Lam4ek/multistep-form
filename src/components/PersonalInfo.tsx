import React from "react";

type UserData = {
  name: string;
  email: string;
  phone: string;
};

type PersonalInfoProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function PersonalInfo({
  name,
  email,
  phone,
  updateFields,
}: PersonalInfoProps) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Personal info</h2>
      <span className='subtitle'>
        Please provide your name, address and phone number
      </span>
      <div className='personal-info-wrapper'>
        <label>Name</label>
        <input
          onChange={(e) => updateFields({ name: e.target.value })}
          value={name}
          autoFocus
          required
          type='text'
        />
        <label>Email Address</label>
        <input
          onChange={(e) => updateFields({ email: e.target.value })}
          value={email}
          required
          type='email'
        />
        <label>Phone Number</label>
        <input
          onChange={(e) => updateFields({ phone: e.target.value })}
          value={phone}
          placeholder='e.g. +1 234 567 890'
          pattern='[0-9]{10}'
          required
          type='tel'
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
