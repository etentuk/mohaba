import React, { FC, useState } from "react";
import { Button, message, Radio, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Participant } from "../ entities/types";
import appState from "../store";
import { radioStyle } from "../ entities/constants";

const ParticipantPage: FC = () => {
  const { participant } = appState.experiment;
  const { Title, Paragraph: P, Text: T } = Typography;

  const [subject, setSubject] = useState<Participant>(
    appState.experiment.participant
  );
  const [clicked, setClicked] = useState(false);

  const ages = ["10-18", "19-28", "29-38", "39+"];

  return (
    <div>
      <Title>About you</Title>
      <T style={{ fontSize: 15 }}>(Please keep your headphones on)</T>
      <br />
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
          <P>Gender</P>
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
        </div>

        <div>
          <P>
            Please select what closely describes your age group from the options
            below
          </P>
          <Radio.Group
            value={subject.ageRange}
            onChange={(e) =>
              setSubject({ ...subject, ageRange: e.target.value })
            }
          >
            {ages.map((age) => (
              <Radio value={age} style={radioStyle} key={age}>
                {age}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className="forwardBtn">
        <Button
          icon={<ArrowRightOutlined />}
          disabled={!subject.ageRange || !subject.gender || clicked}
          onClick={() => {
            setClicked(true);
            participant.ageRange = subject.ageRange;
            participant.gender = subject.gender;
            message.info("You'll be taken to the next page in 20 seconds...");
            const timer = setTimeout(() => {
              appState.currentStep += 1;
            }, 20000);
            return () => clearTimeout(timer);
          }}
        />
      </div>
    </div>
  );
};

export default ParticipantPage;
