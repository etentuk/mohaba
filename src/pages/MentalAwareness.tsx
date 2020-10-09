import React, { FC, useState } from "react";
import { Button, Radio } from "antd";
import appState from "../store";
import { radioStyle } from "../ entities/constants";
import { Mental } from "../ entities/types";

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
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ paddingTop: "30px" }}>
        <Radio.Group>
          Please select the option which best describes how alert you are
          feeling
          {mentalChoices.alertness.map((mental) => (
            <Radio value={mental} style={radioStyle}>
              {mental}
            </Radio>
          ))}
        </Radio.Group>

        <Radio.Group>
          Please select the option which best describes how alert you are
          feeling
          {mentalChoices.energy.map((energy) => (
            <Radio value={energy} style={radioStyle}>
              {energy}
            </Radio>
          ))}
        </Radio.Group>

        <Radio.Group>
          Please select the option which best describes how alert you are
          feeling
          {mentalChoices.excitement.map((excited) => (
            <Radio value={excited} style={radioStyle}>
              {excited}
            </Radio>
          ))}
        </Radio.Group>

        <Radio.Group>
          Please select the option which best describes how alert you are
          feeling
          {mentalChoices.sleep.map((sleep) => (
            <Radio value={sleep} style={radioStyle}>
              {sleep}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div>
        <Button
          style={{
            padding: "10px 25px",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
          disabled={!mentalTestResults.alertness}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default MentalAwareness;
