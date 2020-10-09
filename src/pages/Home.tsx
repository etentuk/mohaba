import React, { FC, useEffect } from "react";
import { Button, Typography } from "antd";
import appState from "../store";

const { Title: T, Paragraph: P } = Typography;

const Home: FC = () => {
  useEffect(() => {
    (async () => {
      await appState.getSongs();
    })();
  }, []);
  return (
    <div>
      <T>Mohaba's Experiment</T>
      <P>
        Description: The Experiment is part of a research conducted by Casto
        Bolo, a Masters student at Zhejiang Normal University College of
        Economics and Management.{" "}
      </P>
      <br />
      <P>
        Please use headphones for this experiment and keep them on during the
        whole time of the experiment (approximately 8-10mins)
      </P>
      <br />
      <P>
        Imagine you are at a restaurant, select what you feel like ordering
        after listening to the music in the next section.
      </P>
      <br />
      <P>
        You can test your audio device with the sound below before proceeding to
        the test.
      </P>
      <br />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        autoPlay
        controls
        src="https://firebasestorage.googleapis.com/v0/b/ghost-photography.appspot.com/o/photography%2F7QiaMcRPVxl6vlWolXmK%2Faudio%2FKoffee%20-%20Lockdown%20(Official%20Video).mp3?alt=media&token=3f4599f1-cf39-45c7-8614-2c12d8be6eed"
      />
      <Button
        onClick={() => {
          appState.leftDisabled = false;
          appState.currentStep += 1;
        }}
      >
        Proceed
      </Button>
    </div>
  );
};

export default Home;
