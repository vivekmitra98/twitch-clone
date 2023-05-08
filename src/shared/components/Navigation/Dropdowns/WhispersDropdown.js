import React, { useEffect, useRef, useState } from "react";
import { AiFillSetting, AiOutlineClose, AiOutlineEye } from "react-icons/ai";

import Modal from "../../UIElements/Modal";

import styles from "./WhispersDropdown.module.css";

const WhispersDropdown = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  });

  const dropdownRef = useRef();

  const searchTermChangeHandler = (event) => {
    const enteredValue = event.target.value;
    setSearchTerm(enteredValue);
  };

  return (
    <Modal
      className={styles["whispers-dropdown"]}
      onClose={props.onClose}
      show={false}
      ref={dropdownRef}
    >
      <div className={styles["whispers-dropdown__header"]}>
        <span className={styles["whispers-dropdown__header__toggle-status"]}>
          <button>
            <AiOutlineEye size={"1.2rem"} />
          </button>
        </span>
        <span>Whispers</span>
        <span className={styles["whispers-dropdown__header__options"]}>
          <button>
            <AiFillSetting size={"1.2rem"} />
          </button>
          <button onClick={props.onClose}>
            <AiOutlineClose size={"1.2rem"} />
          </button>
        </span>
      </div>
      <div className={styles["whispers-dropdown__body"]}>
        <div className={styles["whispers-dropdown__body__search"]}>
          <input
            onChange={searchTermChangeHandler}
            placeholder="Search for People"
            value={searchTerm}
          ></input>
        </div>
        <div className={styles["whispers-dropdown__body__results"]}></div>
      </div>
    </Modal>
  );
};

export default WhispersDropdown;
