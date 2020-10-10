import React, { FC } from "react";
import appState from "../store";

const Music: FC = () => {
  return (
    <div>
      <img src="/speaker.png" alt="speakers" />
      {appState.musicDuration()}
    </div>
  );
};

export default Music;
