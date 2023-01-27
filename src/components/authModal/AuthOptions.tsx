import { FC } from "react";
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

type AuthOptionsProps = {
  isSignUp: boolean;
  onClick: () => void;
};

const AuthOptions: FC<AuthOptionsProps> = ({ isSignUp, onClick }) => {
  return (
    <Stack justify="space-between">
      <Stack spacing="lg" className="p-10">
        <Title order={2} align="center">
          {isSignUp ? "Sign up for TikTok" : "Log in to TikTok"}
        </Title>

        <Stack>
          <Button
            variant="outline"
            color="dark"
            className="font-medium text-gray-700 border-gray-200 hover:bg-transparent"
            radius="xs"
            size="md"
            leftIcon={<AiOutlineUser />}
            fullWidth
            onClick={onClick}
          >
            Use email
          </Button>

          <Button
            variant="outline"
            color="dark"
            className="font-medium text-gray-700 border-gray-200 hover:bg-transparent"
            radius="xs"
            size="md"
            leftIcon={<FcGoogle />}
            fullWidth
          >
            Continue with Google
          </Button>
        </Stack>
      </Stack>

      {isSignUp && (
        <Center className="px-10 py-2 text-gray-400">
          <Text fz="xs">
            {" "}
            By continuing, you agree to TikTok&apos;s{" "}
            <span className="text-gray-600">Terms of Service</span> and confirm
            that you have read TikTok&apos;{" "}
            <span className="text-gray-600">Privacy Policy</span>
          </Text>
        </Center>
      )}
    </Stack>
  );
};

export default AuthOptions;
