import { message } from "antd";
import appState from "./store";

export const nextPage = (): (() => void) => {
  appState.leftDisabled = true;
  message.info("You'll be taken to the next page in 20 seconds...");
  const timer = setTimeout(() => {
    appState.leftDisabled = false;
    appState.currentStep += 1;
  }, 20000);
  return () => clearTimeout(timer);
};
