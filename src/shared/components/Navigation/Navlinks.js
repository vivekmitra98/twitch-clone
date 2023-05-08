import React from "react";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

import MoreDropdown from "./Dropdowns/MoreDropdown/MoreDropdown";

import styles from "./Navlinks.module.css";

const Navlinks = (props) => {
  const { dropdownState, onClickMoreDropdown } = props;

  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink
          to
          className={(isActive) => (isActive ? styles.active : undefined)}
        >
          Following
        </NavLink>
      </li>
      <li>
        <NavLink
          to
          className={(isActive) => (isActive ? styles.active : undefined)}
        >
          Browse
        </NavLink>
      </li>
      <li>
        <button
          type="button"
          className={styles["header-buttons__notifications"]}
          onClick={onClickMoreDropdown}
        >
          <BsThreeDotsVertical size={"1.2rem"} />
        </button>
        {dropdownState.more && <MoreDropdown onClose={props.onCloseDropdown} />}
      </li>
    </ul>
  );
};

export default Navlinks;
