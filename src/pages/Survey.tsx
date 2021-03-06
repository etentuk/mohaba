import React, { FC } from "react";
import { view } from "@risingstack/react-easy-state";
import { Button, Steps } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ParticipantPage from "./Participant";
import Music from "./Music";
import SnackMenu from "./SnackMenu";
import MealMenu from "./MealMenu";
import MentalAwareness from "./MentalAwareness";
import Conclusion from "./Conclusion";
import appState from "../store";
import Home from "./Home";
import { audioElementId } from "../ entities/constants";
import LastMeal from "./LastMeal";

const Survey: FC = () => {
  const {
    currentStep,
    leftDisabled,
    experiment: { songs },
  } = appState;

  const { Step } = Steps;

  const steps = [
    { content: <Home /> },
    { content: <ParticipantPage /> },
    { content: <Music /> },
    { content: <SnackMenu /> },
    { content: <MealMenu /> },
    { content: <LastMeal /> },
    { content: <MentalAwareness /> },
    { content: <Conclusion /> },
  ];

  const onClickBack = () => {
    appState.currentStep -= 1;
  };

  const playNextSong = () => {
    const audioElement = document.getElementById(
      audioElementId
    ) as HTMLAudioElement;

    if (audioElement) {
      if (audioElement.src === songs[0].url) {
        audioElement.src = `${songs[1].url}`;
      } else {
        audioElement.src = `${songs[0].url}`;
      }
      audioElement.play().then();
    }
  };

  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        position: "relative",
        // paddingBottom: "30px",
      }}
    >
      <Steps current={currentStep}>
        {steps.map((item, index) => (
          <Step key={index.toString()} />
        ))}
      </Steps>
      <div
        className="steps-content"
        style={{
          margin: "16px 0",
          minHeight: "200px",
          textAlign: "center",
          paddingTop: "39px",
        }}
      >
        {steps[currentStep].content}
      </div>

      {currentStep > 1 && (
        <audio
          onEnded={playNextSong}
          id="audioPlayer"
          autoPlay
          src={songs[0]?.url}
        />
      )}
      <div
        className="steps-action"
        style={{
          position: "sticky",
          top: "100%",
          width: "50%",
          marginBottom: "20px",
        }}
      >
        {currentStep > 0 && (
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={onClickBack}
            disabled={leftDisabled}
          />
        )}
      </div>
    </div>
  );
};

export default view(Survey);
