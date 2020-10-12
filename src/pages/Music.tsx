import React, { FC } from "react";
import appState from "../store";

const Music: FC = () => {
  return (
    <div>
      <img
        src="/speaker.png"
        alt="speakers"
        style={{ height: "200px" }}
        className="musicImg"
      />
      {appState.musicDuration()}
    </div>
  );
};

export default Music;
