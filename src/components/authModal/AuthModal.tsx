import {
  Modal,
  Group,
  CloseButton,
  Center,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useLoginModal } from "@lib/hooks";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useDisclosure } from "@mantine/hooks";

import AuthOptions from "./AuthOptions";
import AuthForm from "./AuthForm";

const AuthModal = () => {
  const [isSignUp, isSignUpHandlers] = useDisclosure(false);
  const [showForm, showFormHandlers] = useDisclosure(false);

  const { handleClose, open } = useLoginModal();

  const toggleSignUp = () => {
    isSignUpHandlers.toggle();
    showFormHandlers.close();
  };

  const closeForm = () => {
    showFormHandlers.close();
  };

  const openForm = () => {
    showFormHandlers.open();
  };

  const closeModal = () => {
    handleClose();
    setTimeout(() => {
      showFormHandlers.close();
      isSignUpHandlers.close();
    }, 0);
  };

  return (
    <Modal
      opened={open}
      onClose={handleClose}
      centered
      overlayOpacity={0.4}
      closeOnClickOutside={false}
      zIndex={2000}
      padding={0}
      withCloseButton={false}
      radius="md"
    >
      <div className="h-[500px] flex flex-col">
        <Group position={showForm ? "apart" : "right"} className="p-4">
          {showForm && (
            <ActionIcon
              onClick={closeForm}
              radius="xl"
              className="text-gray-800 bg-transparent"
            >
              <HiOutlineChevronLeft size={25} />
            </ActionIcon>
          )}

          <CloseButton
            size="xl"
            iconSize={25}
            radius="xl"
            className="text-gray-800 bg-gray-100"
            onClick={closeModal}
          />
        </Group>

        <div className="flex-1 px-10">
          {!showForm ? (
            <AuthOptions isSignUp={isSignUp} onClick={openForm} />
          ) : (
            <AuthForm isSignUp={isSignUp} />
          )}
        </div>

        <Center className="py-5 space-x-1 border-t border-t-gray-200">
          <Text fz="sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </Text>
          <Text
            fz="sm"
            className="font-medium cursor-pointer text-primary hover:underline"
            onClick={toggleSignUp}
          >
            {isSignUp ? "Log in" : "Sign Up"}
          </Text>
        </Center>
      </div>
    </Modal>
  );
};

export default AuthModal;
