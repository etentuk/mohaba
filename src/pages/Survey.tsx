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

const Survey: FC = () => {
  const {
    currentStep,
    leftDisabled,
    experiment: { songs },
  } = appState;

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

  const onClickBack = () => {
    if (currentStep === 2) appState.clearMusicDuration();
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
    <div style={{ width: "90%", height: "90%", position: "relative" }}>
      {/* <Steps current={currentStep}> */}
      {/*  {steps.map((item) => ( */}
      {/*    // <Step key={item.title} title={item.title} /> */}
      {/*  ))} */}
      {/* </Steps> */}
      {/* <div>{appState.currentStep}</div> */}
      {/* <div>{steps[currentStep].content}</div> */}

      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div
        className="steps-content"
        style={{
          marginTop: "16px",
          minHeight: "200px",
          textAlign: "center",
          paddingTop: "40px",
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
          marginTop: "24px",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        {currentStep > 0 && (
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={onClickBack}
            disabled={leftDisabled}
          />
        )}

        {/* {currentStep > 2 && currentStep < 6 && ( */}
        {/*  <Button */}
        {/*    icon={<ArrowRightOutlined />} */}
        {/*    onClick={onClickForward} */}
        {/*    disabled={!appState.pages[currentStep - 1].valid} */}
        {/*  /> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default view(Survey);
