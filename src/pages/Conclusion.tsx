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
    <Text>
      Thank you for participating in this experiment. Wishing you a blessed day!
    </Text>
  );
};

export default Conclusion;
