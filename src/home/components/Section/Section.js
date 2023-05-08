import React from "react";

import SectionItem from "./SectionItem";

import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <div className={styles.section}>
      <p className={styles["section__heading"]}>
        <span>{props.before}</span>
        <span className={styles["section__heading__title"]}>{props.title}</span>
        <span>{props.after}</span>
      </p>
      <div className={styles["section__items"]}>
        {props.items.map((item) => (
          <SectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
