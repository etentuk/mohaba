import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import appState from "../store";
import { Mental } from "../ entities/types";
import { db, getTimeStamp } from "../firebase";

const MentalAwareness: FC = () => {
  const [mentalTestResults, setMentalTestResults] = useState<Mental>(
    appState.experiment.mental
  );

  const { Paragraph: P, Title } = Typography;

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
    appState.currentStep += 1;
  };

  return (
    <div>
      <Title>Mental Awareness</Title>
      <div className="mental">
        <P>
          To conclude the study please select what closely matches how you feel
          at this moment from the options below
        </P>
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
            <Radio
              value={mental}
              key={mental}
              className="metalLists"
              id="noWrap"
            >
              {mental}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className="mental">
        <P>
          Please select what closely matches how energetic you feel at this
          moment from the options below
        </P>
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
            <Radio
              value={energy}
              key={energy}
              className="metalLists"
              id="noWrap"
            >
              {energy}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className="mental">
        <P>
          Please select what closely matches how excited you feel at this moment
          from the options below
        </P>
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
            <Radio
              value={excited}
              key={excited}
              className="metalLists"
              id="noWrap"
            >
              {excited}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className="mental">
        <P>
          Please select what closely matches how sleepy you feel at this moment
          from the options below
        </P>
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
            <Radio value={sleep} key={sleep} className="metalLists" id="noWrap">
              {sleep}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <Button
        icon={<ArrowRightOutlined />}
        style={{ margin: "30px" }}
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
        Submit Answers
      </Button>
    </div>
  );
};

export default MentalAwareness;
