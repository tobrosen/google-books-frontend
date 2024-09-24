import { ReactNode } from "react";
import styles from "./maincontainer.module.css";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className={styles.mainContainer}>{children}</div>;
};

export default MainContainer;
