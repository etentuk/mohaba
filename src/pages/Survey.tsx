import React, { FC } from "react";
import { view } from "@risingstack/react-easy-state";
import { Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ParticipantPage from "./Participant";
import Music from "./Music";
import SnackMenu from "./SnackMenu";
import MealMenu from "./MealMenu";
import MentalAwareness from "./MentalAwareness";
import Conclusion from "./Conclusion";
import appState from "../store";
import Home from "./Home";

const Survey: FC = () => {
  const steps = [
    { title: "0", content: <Home /> },
    { title: "1", content: <ParticipantPage /> },
    { title: "2", content: <Music /> },
    { title: "3", content: <SnackMenu /> },
    { title: "4", content: <MealMenu /> },
    { title: "5", content: <MentalAwareness /> },
    { title: "6", content: <Conclusion /> },
  ];

  const { currentStep, leftDisabled } = appState;
  const onClickBack = () => {
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
      <div>{steps[currentStep].content}</div>
      {currentStep > 2 && (
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onClickBack}
          disabled={leftDisabled}
        />
      )}

      {currentStep > 2 && currentStep < 6 && (
        <Button
          icon={<ArrowRightOutlined />}
          onClick={onClickForward}
          disabled={!appState.pages[currentStep - 1].valid}
        />
      )}
    </div>
  );
};

export default view(Survey);
