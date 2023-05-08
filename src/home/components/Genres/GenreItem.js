import React from "react";

import styles from "./GenreItem.module.css";

const GenreItem = (props) => {
  return (
    <div className={styles["genre-item"]}>
      <span className={styles["genre-item__label"]}>{props.label}</span>
      <span className={styles["genre-item__symbol"]}>{props.symbol}</span>
    </div>
  );
};

export default GenreItem;
