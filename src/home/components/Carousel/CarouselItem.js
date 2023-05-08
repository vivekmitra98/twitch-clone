import React from "react";

import convertViewers from "../../../shared/util/viewers";

import styles from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  const levelClass = "level" + props.level;

  const carouselItemClasses = `${styles["carousel-item"]} ${styles[levelClass]}`;

  const clickItemHandler = () => {
    props.onClick(props.index);
  };

  return (
    <div className={carouselItemClasses} onClick={clickItemHandler}>
      <img
        className={styles["carousel-item__stream"]}
        src={props.category.logo}
        alt={props.category.name}
      />
      <div className={styles["carousel-item__streamer-info"]}>
        <img
          className={styles["carousel-item__stream-info__profile-image"]}
          src={props.category.logo}
          alt={props.name}
        />
        <div className={styles["carousel-item__streamer-info__stream-info"]}>
          <span
            className={
              styles["carousel-item__streamer-info__stream-info__name"]
            }
          >
            {props.name}
          </span>
          <span
            className={
              styles["carousel-item__streamer-info__stream-info__category"]
            }
          >
            {props.category.name}
          </span>
          <span
            className={
              styles["carousel-item__streamer-info__stream-info__vierers"]
            }
          >
            {convertViewers(props.viewers)} viewers
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
