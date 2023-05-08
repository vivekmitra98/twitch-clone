import React from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import { BsChatSquare, BsSuitDiamondFill } from "react-icons/bs";

import UserDropdown from "./Dropdowns/UserDropdown/UserDropdown";

import styles from "./HeaderButtons.module.css";
import NotificationsDropdown from "./Dropdowns/NotificationsDropdown";
import WhispersDropdown from "./Dropdowns/WhispersDropdown";

const HeaderButtons = (props) => {
  const {
    dropdownState,
    onClickNotificationsDropdown,
    onClickWhispersDropdown,
    onClickUserDropdown,
  } = props;

  return (
    <ul className={styles["header-buttons"]}>
      <li>
        <button
          type="button"
          className={styles["header-buttons__notifications"]}
          onClick={onClickNotificationsDropdown}
        >
          <AiOutlineInbox size={"1.2rem"} />
        </button>
        {dropdownState.notifications && (
          <NotificationsDropdown onClose={props.onCloseDropdown} />
        )}
      </li>
      <li>
        <button
          type="button"
          className={styles["header-buttons__whispers"]}
          onClick={onClickWhispersDropdown}
        >
          <BsChatSquare size={"0.9rem"} />
        </button>
        {dropdownState.whispers && (
          <WhispersDropdown onClose={props.onCloseDropdown} />
        )}
      </li>
      <li>
        <button type="button" className={styles["header-buttons__get-bits"]}>
          <span>
            <BsSuitDiamondFill size={"1rem"} />
          </span>
          <span>Get Bits</span>
        </button>
      </li>
      <li>
        <button type="button" className={styles["header-buttons__login"]}>
          Log In
        </button>
      </li>
      <li>
        <button type="button" className={styles["header-buttons__signup"]}>
          Sign Up
        </button>
      </li>
      <li>
        <button
          type="button"
          className={styles["header-buttons__user__logged-in"]}
          onClick={onClickUserDropdown}
        >
          <FiUser size={"1.5rem"} />
        </button>
        {dropdownState.user && <UserDropdown onClose={props.onCloseDropdown} />}
      </li>
    </ul>
  );
};

export default HeaderButtons;
