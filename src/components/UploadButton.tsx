import { FC } from "react";
import { Button } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";

type UploadButtonProps = {
  handleLogin?: () => void;
};

const UploadButton: FC<UploadButtonProps> = ({ handleLogin }) => {
  return (
    <Button
      leftIcon={<AiOutlinePlus />}
      onClick={handleLogin}
      variant="outline"
      color="dark"
      className="min-height-[36px]"
    >
      Upload
    </Button>
  );
};

export default UploadButton;
