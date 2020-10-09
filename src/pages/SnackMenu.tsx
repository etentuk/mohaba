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
      </div>
      <div>
        <Button
          style={{
            padding: "10px 25px",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            appState.experiment.meal = snackChoice;
            appState.currentStep += 1;
          }}
          disabled={!snackChoice}
        >
          Finish
        </Button>
      </div>
    </div>
  );
};
export default view(SnackMenu);
