import React, { FC, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
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

    if (testPlayer.paused) {
      testPlayer.play().then();
      setIsPlaying(true);
    } else {
      testPlayer.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <audio id="testPlayer" autoPlay src={appState.experiment.testSong.url} />
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

export default Home;
