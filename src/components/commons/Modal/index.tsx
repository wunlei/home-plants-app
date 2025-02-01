import { useEffect } from "react";
import { clsx as c } from "clsx";

import { createPortal } from "react-dom";
import { ModalProps } from "@/components/commons/Modal/Modal.types";
import CloseIcon from "@/assets/close.svg";
import Loader from "@/components/commons/Loader";
import s from "./Modal.module.scss";

function Modal({ isOpen, isLoading, onClose, children }: ModalProps) {
  function handleClose(e: React.MouseEvent) {
    if (isLoading) {
      return;
    }
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={s.overlay} onClick={(e) => handleClose(e)}>
      {isLoading && <Loader absolute />}
      <div className={c(s.container, isLoading && s.containerLoading)}>
        <button className={s.btnClose} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
