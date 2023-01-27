import { createContext, ReactNode, FC } from "react";
import { useDisclosure } from "@mantine/hooks";

type LoginModalProviderType = {
  children: ReactNode;
};

type LoginModalContextType = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export const LoginModalContext = createContext({} as LoginModalContextType);

const LoginModalProvider: FC<LoginModalProviderType> = ({ children }) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <LoginModalContext.Provider
      value={{ open: opened, handleOpen: open, handleClose: close }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
