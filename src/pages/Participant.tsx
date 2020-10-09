import React, { FC, useState } from "react";
import { Button, Radio } from "antd";
import { Participant } from "../ entities/types";
import appState from "../store";
import { radioStyle } from "../ entities/constants";

const ParticipantPage: FC = () => {
  const { participant } = appState.experiment;

  const [subject, setSubject] = useState<Participant>({
    ageRange: "",
    gender: "",
  });

  const ages = ["10-18", "19-28", "29-38", "39+"];

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
        <Radio.Group
          value={subject.gender}
          onChange={(e) => setSubject({ ...subject, gender: e.target.value })}
        >
          <Radio style={radioStyle} value="male">
            Male
          </Radio>
          <Radio style={radioStyle} value="female">
            Female
          </Radio>
        </Radio.Group>
        <Radio.Group
          value={subject.ageRange}
          onChange={(e) => setSubject({ ...subject, ageRange: e.target.value })}
        >
          {ages.map((age) => (
            <Radio value={age} style={radioStyle}>
              {age}
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
          disabled={!subject.ageRange || !subject.gender}
          onClick={() => {
            participant.ageRange = subject.ageRange;
            participant.gender = subject.gender;
            appState.currentStep += 1;
          }}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default ParticipantPage;
