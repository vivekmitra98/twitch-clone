import React, { useEffect, useRef } from "react";

import Modal from "../../../UIElements/Modal";
import MoreDropdownItem from "./MoreDropdownItem";

import styles from "./MoreDropdown.module.css";

const GENERAL_ITEMS = [
  { id: "g1", label: "About" },
  { id: "g2", label: "Advertisers" },
  { id: "g3", label: "Blog" },
  { id: "g4", label: "Developers" },
  { id: "g5", label: "Download Apps" },
  { id: "g6", label: "Gift Card" },
  { id: "g7", label: "IGDB" },
  { id: "g8", label: "Jobs" },
  { id: "g9", label: "Loot Cave - Merch Store" },
  { id: "g10", label: "Music on Twitch" },
  { id: "g11", label: "Partners" },
  { id: "g12", label: "Press" },
  { id: "g13", label: "Turbo" },
];

const HELP_LEGAL_ITEMS = [
  { id: "hl1", label: "Accessibility Statement" },
  { id: "hl2", label: "Ad Choices" },
  { id: "hl3", label: "Community Guidelines" },
  { id: "hl4", label: "Cookie Policy" },
  { id: "hl5", label: "Help" },
  { id: "hl6", label: "Privacy Policy" },
  { id: "hl7", label: "Safety Center" },
  { id: "hl8", label: "Security" },
  { id: "hl9", label: "Terms" },
];

const MoreDropdown = (props) => {
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
      className={styles["more-dropdown"]}
      onClose={props.onClose}
      show={false}
      ref={dropdownRef}
    >
      <div className={styles["more-dropdown__general"]}>
        <p className={styles["more-dropdown__header"]}>GENERAL</p>
        <ul className={styles["more-dropdown__list"]}>
          {GENERAL_ITEMS.map((item) => (
            <MoreDropdownItem key={item.id} label={item.label} />
          ))}
        </ul>
      </div>
      <div className={styles["more-dropdown__help-legal"]}>
        <p className={styles["more-dropdown__header"]}>HELP & LEGAL</p>
        <ul className={styles["more-dropdown__list"]}>
          {HELP_LEGAL_ITEMS.map((item) => (
            <MoreDropdownItem key={item.id} label={item.label} />
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default MoreDropdown;
