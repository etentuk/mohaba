import React, { FC } from "react";
import { view } from "@risingstack/react-easy-state";
import { Steps } from "antd";
import ParticipantPage from "./Participant";
import Music from "./Music";
import SnackMenu from "./SnackMenu";
import MealMenu from "./MealMenu";
import MentalAwareness from "./MentalAwareness";
import Conclusion from "./Conclusion";
import appState from "../store";
import Home from "./Home";

const Survey: FC = () => {
  const { Step } = Steps;

  const steps = [
    { title: "0", content: <Home /> },
    { title: "1", content: <ParticipantPage /> },
    { title: "2", content: <Music /> },
    { title: "3", content: <SnackMenu /> },
    { title: "4", content: <MealMenu /> },
    { title: "5", content: <MentalAwareness /> },
    { title: "6", content: <Conclusion /> },
  ];

  const { currentStep } = appState;
  const onClickBack = () => {
    if (!appState.currentStep) return;
    appState.currentStep -= 1;
  };

  const onClickForward = () => {
    appState.currentStep += 1;
  };

  return (
    <div>
      {/* <Steps current={currentStep}> */}
      {/*  {steps.map((item) => ( */}
      {/*    // <Step key={item.title} title={item.title} /> */}
      {/*  ))} */}
      {/* </Steps> */}
      <div className="steps-content">{steps[currentStep].content}</div>
    </div>
  );
};

export default view(Survey);
