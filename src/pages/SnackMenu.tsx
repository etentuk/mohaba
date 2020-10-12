import React, { FC, useEffect, useState } from "react";
import { Button, message, Radio, Typography } from "antd";
import { view } from "@risingstack/react-easy-state";
import { ArrowRightOutlined } from "@ant-design/icons";
import appState from "../store";
import { mealStyle } from "../ entities/constants";

const SnackMenu: FC = () => {
  const { Title, Paragraph: P } = Typography;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const [snackChoice, setSnackChoice] = useState(appState.experiment.snack);

  const snacks = [
    "Oatmeal raisin cookie and Chocolate chip cookie",
    "Chocolate Bar or Granola Bar",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title>Appetizer Menu</Title>
      {!visible ? (
        <P>
          Please listen to the music for the next 40 seconds after which you can
          make your choice.
        </P>
      ) : (
        <>
          <P>
            You are offered a little snack while you wait for your main menu
            please select a snack from the options
          </P>
          <div>
            <Radio.Group value={snackChoice}>
              {snacks.map((snack) => (
                <Radio
                  value={snack}
                  className="snack"
                  key={snack}
                  style={mealStyle}
                  onChange={(e) => setSnackChoice(e.target.value)}
                >
                  {snack}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="forwardBtn">
            <Button
              icon={<ArrowRightOutlined />}
              onClick={() => {
                appState.experiment.snack = snackChoice;
                message.info(
                  "You'll be taken to the next page in 20 seconds..."
                );
                const timer = setTimeout(() => {
                  appState.currentStep += 1;
                }, 4000);
                return () => clearTimeout(timer);
              }}
              disabled={!snackChoice}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default view(SnackMenu);
