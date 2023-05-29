import React from "react";

interface ModalProps {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen, setIsModalOpen }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
