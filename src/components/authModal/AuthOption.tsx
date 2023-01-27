import { ReactNode, FC } from "react";
import { Button } from "@mantine/core";

type AuthOptionProps = {
  icon?: ReactNode;
  onClick?: () => void;
  title: string;
};

const AuthOption: FC<AuthOptionProps> = ({ icon, onClick, title }) => {
  return (
    <Button
      variant="outline"
      color="dark"
      className="font-medium text-gray-700 border-gray-200 hover:bg-transparent"
      radius="xs"
      size="md"
      leftIcon={icon}
      fullWidth
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default AuthOption;
