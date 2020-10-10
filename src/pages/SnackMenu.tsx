import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { view } from "@risingstack/react-easy-state";
import { ArrowRightOutlined } from "@ant-design/icons";
import appState from "../store";
import { mealStyle, radioStyle } from "../ entities/constants";

const SnackMenu: FC = () => {
  const { Title } = Typography;

  const [snackChoice, setSnackChoice] = useState(appState.experiment.snack);

  const snacks = [
    "Oatmeal raisin cookie and Chocolate chip cookie",
    "Chocolate Bar or Granola Bar",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title>Appetizer Menu</Title>
      <div>
        <Radio.Group value={snackChoice}>
          {snacks.map((snack) => (
            <Radio
              value={snack}
              style={mealStyle}
              onChange={(e) => setSnackChoice(e.target.value)}
            >
              {snack}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <Button
          icon={<ArrowRightOutlined />}
          onClick={() => {
            appState.experiment.snack = snackChoice;
            appState.currentStep += 1;
          }}
          disabled={!snackChoice}
        />
      </div>
    </div>
  );
};
export default view(SnackMenu);
