import { useState } from "react";
import {
  Modal,
  Title,
  Button,
  Stack,
  Divider,
  Group,
  CloseButton,
  Center,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useLoginModal } from "@lib/hooks";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";

import AuthOptions from "./AuthOptions";
import AuthForm from "./AuthForm";

const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { handleClose, open } = useLoginModal();

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
      radius="lg"
    >
      {/* close button */}
      <Group position={showForm ? "apart" : "right"} className="p-4">
        {showForm && (
          <ActionIcon
            onClick={() => setShowForm(false)}
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
          onClick={() => {
            handleClose();
            setTimeout(() => {
              setShowForm(false);
            }, 0);
          }}
        />
      </Group>

      {/* authentication options if show form is true show form else show options */}
      {!showForm ? (
        <AuthOptions isSignUp={isSignUp} onClick={() => setShowForm(true)} />
      ) : (
        <AuthForm isSignUp={isSignUp} onClick={() => setShowForm(false)} />
      )}

      <Divider className="border-gray-200" />

      <Center className="py-5 space-x-1">
        <Text fz="sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
        </Text>
        <Text
          fz="sm"
          className="font-medium cursor-pointer text-primary hover:underline"
          onClick={() => {
            setIsSignUp((prev) => !prev);
            setShowForm(false);
          }}
        >
          {isSignUp ? "Log in" : "Sign Up"}
        </Text>
      </Center>
    </Modal>
  );
};

export default AuthModal;
