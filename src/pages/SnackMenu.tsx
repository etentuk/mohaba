import React, { FC, useState } from "react";
import { Button, Radio } from "antd";
import { view } from "@risingstack/react-easy-state";
import appState from "../store";
import { radioStyle } from "../ entities/constants";

const SnackMenu: FC = () => {
  const [snackChoice, setSnackChoice] = useState(appState.experiment.snack);

  const snacks = [
    "Oatmeal raisin cookie and Chocolate chip cookie",
    "Chocolate Bar or Granola Bar",
  ];

  return (
    <div>
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
        onClick={() => {
          appState.experiment.meal = snackChoice;
          appState.currentStep += 1;
        }}
        disabled={!snackChoice}
      >
        Finish
      </Button>
    </div>
  );
};
export default view(SnackMenu);
