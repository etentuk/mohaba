import React, { FC, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { view } from "@risingstack/react-easy-state";
import appState from "../store";

const { Title: T, Paragraph: P } = Typography;

const Home: FC = () => {
  useEffect(() => {
    (async () => {
      await appState.getSongs();
    })();
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const testPlayer = document.getElementById(
      "testPlayer"
    ) as HTMLAudioElement;
    if (testPlayer) {
      if (testPlayer.paused) {
        testPlayer.play().then();
        setIsPlaying(true);
      } else {
        testPlayer.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <audio id="testPlayer" src={appState.experiment.testSong.url} />
      <T>MBA Experiment on Restaurant Behavior</T>
      <P>
        This Experiment is part of a research conducted by Casto Bolo, a Masters
        student at Zhejiang Normal University College of Economics and
        Management.
      </P>
      <P>
        Each page has approximately 40 - 60 seconds of music. Please use
        headphones for this experiment and keep them on for the entire duration
        of the experiment (8-10mins).
      </P>
      <P>
        Imagine you are at a restaurant, select what you feel like ordering
        after listening to the music in the upcoming section.
      </P>
      <P>
        You can test your audio device with the sound below before proceeding to
        the test.
      </P>
      <div style={{ marginBottom: "15px" }}>
        {isPlaying ? (
          <PauseCircleOutlined style={{ fontSize: 50 }} onClick={togglePlay} />
        ) : (
          <PlayCircleOutlined style={{ fontSize: 50 }} onClick={togglePlay} />
        )}
      </div>
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

export default view(Home);
