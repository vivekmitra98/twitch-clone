import React, { useCallback, useReducer } from "react";
import { Link } from "react-router-dom";
import { FaTwitch } from "react-icons/fa";

import Navlinks from "./Navlinks";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";

import styles from "./MainNavigation.module.css";

const MORE = "MORE";
const NOTIFICATIONS = "NOTIFICATIONS";
const WHISPERS = "WHISPERS";
const USER = "USER";
const CLOSE = "CLOSE";

const initialDropdownState = {
  more: false,
  notifications: false,
  whispers: false,
  user: false,
};

const dropdownReducer = (state, action) => {
  if (action.type === MORE) {
    return {
      more: !state.more,
      notifications: false,
      whispers: false,
      user: false,
    };
  }

  if (action.type === NOTIFICATIONS) {
    return {
      notifications: !state.notifications,
      more: false,
      whispers: false,
      user: false,
    };
  }

  if (action.type === WHISPERS) {
    return {
      whispers: !state.whispers,
      more: false,
      notifications: false,
      user: false,
    };
  }

  if (action.type === USER) {
    return {
      user: !state.user,
      more: false,
      whispers: false,
      notifications: false,
    };
  }

  if (action.type === CLOSE) {
    return {
      more: false,
      notifications: false,
      whispers: false,
      user: false,
    };
  }

  return initialDropdownState;
};

const MainNavigation = () => {
  const [dropdownState, dispatchDropdown] = useReducer(
    dropdownReducer,
    initialDropdownState
  );

  const toggleMoreDropdownHandler = useCallback(() => {
    dispatchDropdown({ type: MORE });
  }, []);

  const toggleNotificationsDropdownHandler = useCallback(() => {
    dispatchDropdown({ type: NOTIFICATIONS });
  }, []);

  const toggleWhispersDropdownHandler = useCallback(() => {
    dispatchDropdown({ type: WHISPERS });
  }, []);

  const toggleUserDropdownHandler = useCallback(() => {
    dispatchDropdown({ type: USER });
  }, []);

  const closeDropdownHandler = useCallback(() => {
    dispatchDropdown({ type: CLOSE });
  }, []);

  return (
    <header className={styles["main-navigation__header"]}>
      <span className={styles["main-navigation__title"]}>
        <Link to="/">
          <FaTwitch size={"2rem"} />
        </Link>
      </span>
      <nav className={styles["main-navigation__header-options"]}>
        <span className={styles["main-navigation__header-nav-links"]}>
          <Navlinks
            dropdownState={dropdownState}
            onClickMoreDropdown={toggleMoreDropdownHandler}
            onCloseDropdown={closeDropdownHandler}
          />
        </span>
        <span className={styles["main-navigation__header-search"]}>
          <Search />
        </span>
        <span className={styles["main-navigation__header-buttons"]}>
          <HeaderButtons
            dropdownState={dropdownState}
            onClickNotificationsDropdown={toggleNotificationsDropdownHandler}
            onClickWhispersDropdown={toggleWhispersDropdownHandler}
            onClickUserDropdown={toggleUserDropdownHandler}
            onCloseDropdown={closeDropdownHandler}
          />
        </span>
      </nav>
    </header>
  );
};

export default MainNavigation;
