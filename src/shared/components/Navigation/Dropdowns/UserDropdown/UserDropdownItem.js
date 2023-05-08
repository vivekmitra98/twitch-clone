import React from "react";

import styles from "./UserDropdownItem.module.css";

const UserDropdownItem = (props) => {
  const itemClasses = `${styles["user-dropdown-item"]} ${
    props.itemClasses ? props.itemClasses : ""
  }`;

  const iconClasses = `${styles["user-dropdown-item__icon"]} ${
    props.iconClasses ? props.itemClasses : ""
  }`;

  const labelClasses = `${styles["user-dropdown-item__labe;"]} ${
    props.labelClasses ? props.labelClasses : ""
  }`;

  return (
    <li className={itemClasses}>
      <span className={iconClasses}>{props.icon}</span>
      <span className={labelClasses}>{props.label}</span>
    </li>
  );
};

export default UserDropdownItem;
