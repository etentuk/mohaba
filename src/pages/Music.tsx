import React, { FC } from "react";
import appState from "../store";

const Music: FC = () => {
  const nextStep = () => {
    appState.currentStep += 1;
  };
  const nextPage = setTimeout(() => nextStep(), 4000);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        autoPlay
        src="https://firebasestorage.googleapis.com/v0/b/ghost-photography.appspot.com/o/photography%2F7QiaMcRPVxl6vlWolXmK%2Faudio%2FKoffee%20-%20Lockdown%20(Official%20Video).mp3?alt=media&token=3f4599f1-cf39-45c7-8614-2c12d8be6eed"
      />
      <img src="/speaker.png" alt="speakers" />
      {nextPage}
    </div>
  );
};

export default Music;
