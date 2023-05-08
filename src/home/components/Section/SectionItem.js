import React from "react";

import convertViewers from "../../../shared/util/viewers";

import styles from "./SectionItem.module.css";

const SectionItem = (props) => {
  const sectionItemClasses = `${styles["section-item"]} ${
    props.item.subTitle ? styles["section-stream"] : styles["section-category"]
  }`;
  return (
    <div className={sectionItemClasses}>
      <img
        className={styles["section-item__image"]}
        src={props.item.img}
        alt={props.item.category}
      />
      <div className={styles["section-item__info"]}>
        {props.item.subTitle && (
          <img
            className={styles["section-itme__info__image"]}
            src={props.item.img}
            alt={props.item.title}
          />
        )}
        <div className={styles["section-item__info__details"]}>
          <p className={styles["section-item__info__details__title"]}>
            {props.item.title}
          </p>
          {props.item.subTitle && (
            <p className={styles["section-item__info__details__sub-title"]}>
              {props.item.subTitle}
            </p>
          )}
          <p className={styles["section-item__info__details__viewers"]}>
            {convertViewers(props.item.viewers)} viewers
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionItem;
