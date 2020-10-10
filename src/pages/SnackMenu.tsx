import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { view } from "@risingstack/react-easy-state";
import { ArrowRightOutlined } from "@ant-design/icons";
import appState from "../store";
import { radioStyle } from "../ entities/constants";

const SnackMenu: FC = () => {
  const { Title } = Typography;

  const [snackChoice, setSnackChoice] = useState(appState.experiment.snack);

  const snacks = [
    "Oatmeal raisin cookie and Chocolate chip cookie",
    "Chocolate Bar or Granola Bar",
  ];

  return (
    <div>
      <Title>Appetizer Menu</Title>
      <Radio.Group value={snackChoice}>
        {snacks.map((snack) => (
          <Radio
            value={snack}
            style={radioStyle}
            onChange={(e) => setSnackChoice(e.target.value)}
          >
            {snack}
          </Radio>
        ))}
      </Radio.Group>

      <Button
        icon={<ArrowRightOutlined />}
        onClick={() => {
          appState.experiment.snack = snackChoice;
          appState.currentStep += 1;
        }}
        disabled={!snackChoice}
      />
    </div>
  );
};
export default view(SnackMenu);
