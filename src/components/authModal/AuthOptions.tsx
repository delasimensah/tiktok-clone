import { FC } from "react";
import { Title, Stack, Center, Text } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import AuthOption from "./AuthOption";

type AuthOptionsProps = {
  isSignUp: boolean;
  onClick?: () => void;
};

const AuthOptions: FC<AuthOptionsProps> = ({ isSignUp, onClick }) => {
  return (
    <Stack justify="space-between" className="h-full">
      <Stack spacing="lg">
        <Title order={2} align="center">
          {isSignUp ? "Sign up for TikTok" : "Log in to TikTok"}
        </Title>

        <Stack>
          <AuthOption
            icon={<AiOutlineUser />}
            onClick={onClick}
            title="Use email"
          />
          <AuthOption icon={<FcGoogle />} title="Continue with google" />
        </Stack>
      </Stack>

      {isSignUp && (
        <Center className="py-2">
          <Text fz="xs" ta="center" className="text-gray-400 ">
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
