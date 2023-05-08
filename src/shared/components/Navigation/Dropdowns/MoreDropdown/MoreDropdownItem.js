import React from "react";

import styles from "./MoreDropdownItem.module.css";

const MoreDropdownItem = (props) => {
  const itemClasses = `${styles["more-dropdown-item"]} ${
    props.className ? props.className : ""
  }`;

  return <li className={itemClasses}>{props.label}</li>;
};

export default MoreDropdownItem;
