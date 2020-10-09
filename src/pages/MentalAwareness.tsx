import React, { FC, useState } from "react";
import { Button, Radio } from "antd";
import appState from "../store";
import { radioStyle } from "../ entities/constants";
import { Mental } from "../ entities/types";
import { db, getTimeStamp } from "../firebase";

const MentalAwareness: FC = () => {
  const [mentalTestResults, setMentalTestResults] = useState<Mental>(
    appState.experiment.mental
  );

  const mentalChoices = {
    alertness: [
      "Extremely alert",
      "Very Alert",
      "Alert",
      "Rather Alert",
      "Neither alert nor sleepy",
      "Some signs of sleepiness",
      "Sleepy, but no effort to keep awake",
      "Sleepy, some effort to keep awake ",
      "Very sleepy, great effort to keep awake, fighting sleep",
    ],
    energy: ["Stimulated", "Relaxed"],
    excitement: ["Excited", "Calm"],
    sleep: ["Wide Awake", "Sleepy"],
  };

  const submitSurvey = async () => {
    await db.collection("experiments").add({
      ...appState.experiment,
      mental: { ...mentalTestResults },
      submittedAt: getTimeStamp(),
    });
    appState.resetExperiment();
    appState.currentStep += 1;
  };

  return (
    <div>
      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            alertness: e.target.value,
          })
        }
        value={mentalTestResults.alertness}
      >
        Please select the option which best describes how alert you are feeling
        {mentalChoices.alertness.map((mental) => (
          <Radio value={mental} style={radioStyle}>
            {mental}
          </Radio>
        ))}
      </Radio.Group>

      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            energy: e.target.value,
          })
        }
        value={mentalTestResults.energy}
      >
        Please select the option which best describes how alert you are feeling
        {mentalChoices.energy.map((energy) => (
          <Radio value={energy} style={radioStyle}>
            {energy}
          </Radio>
        ))}
      </Radio.Group>

      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            excitement: e.target.value,
          })
        }
        value={mentalTestResults.excitement}
      >
        Please select the option which best describes how alert you are feeling
        {mentalChoices.excitement.map((excited) => (
          <Radio value={excited} style={radioStyle}>
            {excited}
          </Radio>
        ))}
      </Radio.Group>

      <Radio.Group
        onChange={(e) =>
          setMentalTestResults({
            ...mentalTestResults,
            sleep: e.target.value,
          })
        }
        value={mentalTestResults.sleep}
      >
        Please select the option which best describes how alert you are feeling
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
        Proceed
      </Button>
    </div>
  );
};

export default MentalAwareness;
