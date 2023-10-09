import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import { useMultistepForm } from "./hook/useMultiStepForm";
import PlanForm from "./components/PlanForm";
import PersonalInfo from "./components/PersonalInfo";
import Additions from "./components/Additions";
import Summary from "./components/Summary";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
};

function App() {
  interface ICart {
    title: string;
    price: number;
  }
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const [plan, setPlan] = useState("");
  const [isCurrentPlanYearly, setIsCurrentPlanYearly] = React.useState(false);
  const [service, setService] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  const [cart, setCart] = useState<ICart[]>([]);
  const [price, setPrice] = useState(0);

  const [isFormPassed, setIsFormPassed] = useState(false);

  useEffect(() => {
    if (plan === "Arcade") setPrice(9);
    if (plan === "Advanced") setPrice(12);
    if (plan === "Pro") setPrice(15);
    if (service && !cart.some((el) => el.title === "Online service"))
      setCart([...cart, { title: "Online service", price: 1 }]);

    if (storage && !cart.some((el) => el.title === "Larger storage"))
      setCart([...cart, { title: "Larger storage", price: 2 }]);

    if (profile && !cart.some((el) => el.title === "Customizeble profile"))
      setCart([...cart, { title: "Customizeble profile", price: 2 }]);

    if (!service && cart.some((el) => el.title === "Online service"))
      setCart(cart.filter((el) => el.title !== "Online service"));

    if (!storage && cart.some((el) => el.title === "Larger storage"))
      setCart(cart.filter((el) => el.title !== "Larger storage"));

    if (!profile && cart.some((el) => el.title === "Customizeble profile"))
      setCart(cart.filter((el) => el.title !== "Customizeble profile"));
  }, [service, storage, profile, plan]);
  const {
    currentStepIndex,
    step,
    steps,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
  } = useMultistepForm([
    <PersonalInfo {...data} updateFields={updateFields} />,
    <PlanForm
      isActive={plan}
      setIsActive={setPlan}
      isCurrentPlanYearly={isCurrentPlanYearly}
      setIsCurrentPlanYearly={setIsCurrentPlanYearly}
    />,
    <Additions
      service={service}
      setService={setService}
      storage={storage}
      setStorage={setStorage}
      profile={profile}
      setProfile={setProfile}
      isCurrentPlanYearly={isCurrentPlanYearly}
    />,
    <Summary
      plan={plan}
      isCurrentPlanYearly={isCurrentPlanYearly}
      cart={cart}
      price={price}
    />,
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful!");
  }

  useEffect(() => {
    if (isLastStep) {
      setIsFormPassed(true);
    }
  }, [isLastStep]);

  return (
    <div className='App'>
      <div className='side-bar'>
        {[
          { step: 1, title: "your info" },
          { step: 2, title: "select plan" },
          { step: 3, title: "add-ons" },
          { step: 4, title: "summary" },
        ].map((el) => {
          return (
            <div
              onClick={() => (isFormPassed ? goTo(el.step - 1) : "")}
              className={
                currentStepIndex === el.step - 1
                  ? "side-bar__wrapper side-bar_active"
                  : "side-bar__wrapper"
              }
            >
              <h2>{el.step}</h2>
              {window.innerWidth > 940 && (
                <div>
                  <span>{`step ${el.step}`}</span>
                  <h3>{el.title}</h3>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <form onSubmit={onSubmit}>
        <div className='wrapper'>
          {step}
          {!isFirstStep && (
            <button className='prev-button' type='button' onClick={back}>
              Go Back
            </button>
          )}

          {!isLastStep ? (
            <button
              disabled={plan == "" && currentStepIndex == 1}
              className='next-button'
            >
              Next Step
            </button>
          ) : (
            <button type='submit' className='next-button'>
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
