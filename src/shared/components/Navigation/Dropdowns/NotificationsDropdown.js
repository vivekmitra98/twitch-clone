import React, { useEffect, useRef, useState } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";

import Modal from "../../UIElements/Modal";

import styles from "./NotificationsDropdown.module.css";

const MY_TWITCH = "MY_TWITCH";
const MY_CHANNEL = "MY_CHANNEL";

const NotificationsDropdown = (props) => {
  const [tab, setTab] = useState(MY_TWITCH);

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

  const setMyTwitchTabHandler = () => {
    setTab(MY_TWITCH);
  };

  const setMyChannelTabHandler = () => {
    setTab(MY_CHANNEL);
  };

  const myTwitchContent = (
    <div className={styles["my-twitch"]}>
      <BsFillEmojiSunglassesFill size={"5rem"} />
      <div className={styles["my-twitch__messages"]}>
        <p>Your'e all caught up. What a pro!</p>
        <p>You have no messages.</p>
      </div>
    </div>
  );

  const myChannelContent = (
    <div className={styles["my-channel"]}>
      <CiStreamOn size={"5rem"} />
      <p>New to Streaming? Try it out!</p>
      <p>Share your hobbies and meet new friends.</p>
      <button>Go to Creator Dashboard</button>
    </div>
  );

  return (
    <Modal
      className={styles["notifications-dropdown"]}
      onClose={props.onClose}
      show={false}
      ref={dropdownRef}
    >
      <div className={styles["notifications-dropdown__header"]}>
        <span
          className={styles["notifications-dropdown__header__toggle-status"]}
        >
          <button>
            <BiEnvelopeOpen size={"1.2rem"} />
          </button>
        </span>
        <span>Notifications</span>
        <span className={styles["notifications-dropdown__header__options"]}>
          <button>
            <AiFillSetting size={"1.2rem"} />
          </button>
          <button onClick={props.onClose}>
            <AiOutlineClose size={"1.2rem"} />
          </button>
        </span>
      </div>
      <div className={styles["notifications-dropdown__body"]}>
        <div className={styles["notifications-dropdown__body__tabs"]}>
          <span
            className={tab === MY_TWITCH ? styles.active : ""}
            onClick={setMyTwitchTabHandler}
          >
            My Twitch
          </span>
          <span
            className={tab === MY_CHANNEL ? styles.active : ""}
            onClick={setMyChannelTabHandler}
          >
            My Channel
          </span>
        </div>
        {tab === MY_TWITCH ? myTwitchContent : myChannelContent}
      </div>
    </Modal>
  );
};

export default NotificationsDropdown;
