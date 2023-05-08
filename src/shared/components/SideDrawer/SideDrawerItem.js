import React, { Fragment } from "react";

import convertViewers from "../../util/viewers";

import styles from "./SideDrawerItem.module.css";

const SideDrawerItem = (props) => {
  return (
    <li className={styles["side-drawer-item"]}>
      <div className={styles["side-drawer-item__info"]}>
        <img
          className={styles["side-drawer-item__profile-image"]}
          src={props.category.logo}
          alt={props.name}
        />
        <div className={styles["side-drawer-item__stream-info"]}>
          <span className={styles["side-drawer-item__stream-info__name"]}>
            {props.name}
          </span>
          <span className={styles["side-drawer-item__stream-info__category"]}>
            {props.category.name}
          </span>
        </div>
      </div>
      <div className={styles["side-drawer-item__viewer-status"]}>
        {props.viewers > 0 && (
          <Fragment>
            <div className={styles["side-drawer-item__online-symbol"]}></div>
            <div>{convertViewers(props.viewers)}</div>
          </Fragment>
        )}
        {props.viewers === 0 && <span>Offline</span>}
      </div>
    </li>
  );
};

export default SideDrawerItem;
