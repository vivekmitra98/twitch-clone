import React, { Fragment } from "react";
import { forwardRef } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const ModalOverlay = forwardRef((props, ref) => {
  return ReactDOM.createPortal(
    <div className={`${styles.modal} ${props.className}`} ref={ref}>
      {props.children}
    </div>,
    document.getElementById("modal-hook")
  );
});

const Modal = forwardRef((props, ref) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onClose} />}
      <ModalOverlay {...props} ref={ref} />
    </Fragment>
  );
});

export default Modal;
