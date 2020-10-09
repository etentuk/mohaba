import React, { FC } from "react";
import { Layout } from "antd";
import styles from "./Content.module.css";

const { Content: C } = Layout;

const Content: FC = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <C className={styles.container}>{children}</C>
    </div>
  </div>
);

export default Content;
