import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Participant } from "../ entities/types";
import appState from "../store";
import { radioStyle } from "../ entities/constants";

const ParticipantPage: FC = () => {
  const { participant } = appState.experiment;
  const { Title } = Typography;

  const [subject, setSubject] = useState<Participant>(
    appState.experiment.participant
  );

  const ages = ["10-18", "19-28", "29-38", "39+"];

  return (
    <div>
      <Title>About you</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <audio
          src={appState.experiment.testSong.url}
          autoPlay
          loop
          style={{ display: "block" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Radio.Group
            value={subject.gender}
            onChange={(e) => setSubject({ ...subject, gender: e.target.value })}
          >
            Please choose your gender.
            <Radio style={radioStyle} value="male">
              Male
            </Radio>
            <Radio style={radioStyle} value="female">
              Female
            </Radio>
          </Radio.Group>
        </div>

        <div>
          <Radio.Group
            value={subject.ageRange}
            onChange={(e) =>
              setSubject({ ...subject, ageRange: e.target.value })
            }
          >
            Please Select your age range
            {ages.map((age) => (
              <Radio value={age} style={radioStyle}>
                {age}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className="forwardBtn">
        <Button
          icon={<ArrowRightOutlined />}
          disabled={!subject.ageRange || !subject.gender}
          onClick={() => {
            participant.ageRange = subject.ageRange;
            participant.gender = subject.gender;
            appState.currentStep += 1;
          }}
        />
      </div>
    </div>
  );
};

export default ParticipantPage;
