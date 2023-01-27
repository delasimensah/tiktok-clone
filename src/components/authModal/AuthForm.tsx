import { FC, useState } from "react";

import { Button, TextInput, PasswordInput, Stack } from "@mantine/core";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

type AuthFormProps = {
  onClick: () => void;
  isSignUp: boolean;
};

const AuthForm: FC<AuthFormProps> = ({ onClick, isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack className="p-10">
      <TextInput placeholder="Email Address" size="md" />

      <PasswordInput
        placeholder="Password"
        size="md"
        visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <RxEyeOpen size={size} /> : <RxEyeClosed size={size} />
        }
        defaultVisible={false}
      />

      {isSignUp ? (
        <Button disabled={email === "" || password === ""} size="md">
          Next
        </Button>
      ) : (
        <Button disabled={email === "" || password === ""} size="md">
          Log in
        </Button>
      )}
    </Stack>
  );
};

export default AuthForm;
