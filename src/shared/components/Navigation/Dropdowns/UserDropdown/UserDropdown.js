import React, { useEffect, useRef } from "react";
import { FiUser, FiGift } from "react-icons/fi";
import {
  BiVideoRecording,
  BiShieldAlt2,
  BiStar,
  BiLogIn,
  BiLogOut,
} from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdOutlineAddReaction, MdLanguage } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import { AiFillSetting } from "react-icons/ai";

import Modal from "../../../UIElements/Modal";
import UserDropdownItem from "./UserDropdownItem";

import styles from "./UserDropdown.module.css";

const ICON_SIZE = "1.5rem";

const USER_DROPDOWN_ITEMS = [
  { id: "i1", icon: <BiVideoRecording size={ICON_SIZE} />, label: "Channel" },
  { id: "i2", icon: <GoSettings size={ICON_SIZE} />, label: "Video Producer" },
  {
    id: "i3",
    icon: <HiOutlineChartSquareBar size={ICON_SIZE} />,
    label: "Creator Dashboard",
  },
  { id: "i4", icon: <BiShieldAlt2 size={ICON_SIZE} />, label: "Safety" },
  {
    id: "i5",
    icon: <MdOutlineAddReaction size={ICON_SIZE} />,
    label: "Emote Attribution",
  },
  { id: "i6", icon: <BiStar size={ICON_SIZE} />, label: "Subscriptions" },
  { id: "i7", icon: <FiGift size={ICON_SIZE} />, label: "Drops & Rewards" },
  { id: "i8", icon: <SlWallet size={ICON_SIZE} />, label: "Wallet" },
  { id: "i9", icon: <AiFillSetting size={ICON_SIZE} />, label: "Settings" },
  { id: "i10", icon: <MdLanguage size={ICON_SIZE} />, label: "Language" },
  { id: "i11", icon: <BiLogIn size={ICON_SIZE} />, label: "Log In" },
  { id: "i12", icon: <BiLogOut size={ICON_SIZE} />, label: "Log Out" },
];

const UserDropdown = (props) => {
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

  return (
    <Modal
      className={styles["user-dropdown"]}
      onClose={props.onClose}
      show={false}
      ref={dropdownRef}
    >
      <ul>
        <li id={styles["user-dropdown__user"]}>
          <span className={styles["user-dropdown__user-icon"]}>
            <FiUser size={"2rem"} />
          </span>
          <span>Username</span>
        </li>
        {USER_DROPDOWN_ITEMS.map((userDropdownItem) => (
          <UserDropdownItem
            key={userDropdownItem.id}
            icon={userDropdownItem.icon}
            label={userDropdownItem.label}
          />
        ))}
      </ul>
    </Modal>
  );
};

export default UserDropdown;
