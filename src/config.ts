import { message } from "antd";

export const messageConfig = (): void =>
  message.config({
    duration: 5,
    maxCount: 3,
    rtl: false,
  });
