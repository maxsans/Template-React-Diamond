import React from "react";
import styles from "./FullScreen.module.scss";
import Diamond from "react-diamond";
import items from "../../utils/items";

const FullScreen: React.FC = () => {
  return (
    <div className={styles.container} id="container">
      <Diamond items={items} />
    </div>
  );
};

export default FullScreen;
