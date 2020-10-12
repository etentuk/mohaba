import React, { FC, useEffect } from "react";
import { SoundOutlined } from "@ant-design/icons";
import { view } from "@risingstack/react-easy-state";
import { Typography } from "antd";
import appState from "../store";

const Music: FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      appState.currentStep += 1;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const { Paragraph: P } = Typography;

  return (
    <div>
      <P>
        Please listen to the music until it is done in 60 seconds, after which
        you will be taken to the next page automatically.
      </P>
      <SoundOutlined style={{ fontSize: "400px" }} className="musicImg" />
    </div>
  );
};

export default view(Music);
