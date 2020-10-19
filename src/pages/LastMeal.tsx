import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { view } from "@risingstack/react-easy-state";
import appState from "../store";
import { mealStyle } from "../ entities/constants";
import { nextPage } from "../functions";

const LastMeal: FC = () => {
  const [timeChosen, setTimeChosen] = useState(appState.experiment.lastEaten);
  const [clicked, setClicked] = useState(false);

  const { Paragraph: P, Title } = Typography;

  const lastEaten = ["1 - 2 hours", "3 - 4 hours", "4+ hours"];

  return (
    <div>
      <Title>Last Time You Ate?</Title>
      <div className="mental">
        <P>Please select when last you ate from the options below</P>
        <Radio.Group value={timeChosen}>
          {lastEaten.map((time) => (
            <Radio
              value={time}
              key={time}
              className="snack"
              id="noWrap"
              style={mealStyle}
              onChange={(e) => setTimeChosen(e.target.value)}
            >
              {time}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className="forwardBtn">
        <Button
          icon={<ArrowRightOutlined />}
          style={{ margin: "30px" }}
          disabled={!timeChosen || clicked}
          onClick={() => {
            setClicked(true);
            appState.experiment.lastEaten = timeChosen;
            nextPage();
          }}
        />
      </div>
    </div>
  );
};

export default view(LastMeal);
