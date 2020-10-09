import React, { FC } from "react";
import { Typography } from "antd";

const Conclusion: FC = () => {
  const { Text } = Typography;
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
