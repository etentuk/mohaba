import React, { FC, useEffect } from "react";
import { Typography } from "antd";
import appState from "../store";

const Conclusion: FC = () => {
  const { Text } = Typography;
  useEffect(() => {
    appState.resetExperiment();
    appState.leftDisabled = true;
  }, []);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ paddingTop: "30px" }}>
        Thank you for participating in this experiment. Wishing you a blessed
        day!
      </Text>
    </div>
  );
};

export default Conclusion;
