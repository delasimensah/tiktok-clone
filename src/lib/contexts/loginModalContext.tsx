import { createContext, useState, ReactNode, FC } from "react";

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LoginModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
