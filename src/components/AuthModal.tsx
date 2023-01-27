import React from "react";
import { Modal } from "@mantine/core";
import { useLoginModal } from "@lib/hooks";

const AuthModal = () => {
  const { handleClose, open } = useLoginModal();
  return (
    <Modal
      opened={open}
      onClose={() => handleClose()}
      centered
      overlayOpacity={0.4}
      closeOnClickOutside={false}
      zIndex={2000}
    >
      <div>hello there</div>
    </Modal>
  );
};

export default AuthModal;
