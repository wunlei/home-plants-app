import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "@/components/Modal/Modal.types";
import CloseIcon from "@/assets/close.svg";
import s from "./Modal.module.scss";

function Modal({ isOpen, onClose, children }: ModalProps) {
  function handleClose(e: React.MouseEvent) {
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

  return createPortal(
    <div className={s.overlay} onClick={(e) => handleClose(e)}>
      <div className={s.container}>
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
