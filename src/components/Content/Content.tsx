import React, { FC } from "react";
import { Layout } from "antd";
import styles from "./Content.module.css";

const { Content: C } = Layout;

const Content: FC = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <div
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <C className={styles.childContainer}>{children}</C>
      </div>
    </div>
  </div>
);

export default Content;
