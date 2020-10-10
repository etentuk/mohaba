import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import appState from "../store";
import { radioStyle } from "../ entities/constants";
import { Mental } from "../ entities/types";
import { db, getTimeStamp } from "../firebase";

const MentalAwareness: FC = () => {
  const [mentalTestResults, setMentalTestResults] = useState<Mental>(
    appState.experiment.mental
  );

  const { Text, Title } = Typography;

  const mentalChoices = {
    alertness: [
      "Very Alert",
      "Alert",
      "Neither alert nor sleepy",
      "Sleepy, but no effort to keep awake",
      "Sleepy, some effort to keep awake ",
    ],
    energy: [
      "Very Stimulated",
      "Stimulated",
      "Neither Stimulated nor relaxed",
      "Relaxed",
      "Very Relaxed",
    ],
    excitement: [
      "Very Excited",
      "Excited",
      "Neither Excited nor Calm",
      "Calm",
      "Very Calm",
    ],
    sleep: [
      "Wide Awake",
      "Awake",
      "Neither Awake nor Sleepy",
      "Sleepy",
      "Very Sleepy",
    ],
  };

  const submitSurvey = async () => {
    await db.collection("experiments").add({
      ...appState.experiment,
      mental: { ...mentalTestResults },
      submittedAt: getTimeStamp(),
    });
    if (appState.experiment.musicSpeed === "fast") {
      await db
        .collection("experiments")
        .doc("AQzgeLyZhRnwvW31R7UD")
        .update({ fastExperiments: appState.fastExperiments + 1 });
    } else {
      await db
        .collection("experiments")
        .doc("AQzgeLyZhRnwvW31R7UD")
        .update({ slowExperiments: appState.slowExperiments + 1 });
    }
    appState.resetExperiment();
    appState.currentStep += 1;
  };

  return (
    <div>
      <Title>Mental Awareness</Title>
      <Text>
        Please select the option which best describes how alert you are feeling
      </Text>
      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            alertness: e.target.value,
          })
        }
        value={mentalTestResults.alertness}
      >
        {mentalChoices.alertness.map((mental) => (
          <Radio value={mental} style={radioStyle}>
            {mental}
          </Radio>
        ))}
      </Radio.Group>
      <br />
      <Text>
        Please select the option which best describes how alert you are feeling
      </Text>
      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            energy: e.target.value,
          })
        }
        value={mentalTestResults.energy}
      >
        {mentalChoices.energy.map((energy) => (
          <Radio value={energy} style={radioStyle}>
            {energy}
          </Radio>
        ))}
      </Radio.Group>
      <br />

      <Text>
        Please select the option which best describes how alert you are feeling
      </Text>
      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            excitement: e.target.value,
          })
        }
        value={mentalTestResults.excitement}
      >
        {mentalChoices.excitement.map((excited) => (
          <Radio value={excited} style={radioStyle}>
            {excited}
          </Radio>
        ))}
      </Radio.Group>
      <br />

      <Text>
        Please select the option which best describes how alert you are feeling
      </Text>
      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            sleep: e.target.value,
          })
        }
        value={mentalTestResults.sleep}
      >
        {mentalChoices.sleep.map((sleep) => (
          <Radio value={sleep} style={radioStyle}>
            {sleep}
          </Radio>
        ))}
      </Radio.Group>
      <Button
        disabled={
          !mentalTestResults.alertness ||
          !mentalTestResults.sleep ||
          !mentalTestResults.excitement ||
          !mentalTestResults.energy
        }
        onClick={() => {
          submitSurvey().then(null);
        }}
      >
        Finish
      </Button>
    </div>
  );
};

export default MentalAwareness;
