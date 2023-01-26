import { ReactNode, FC } from "react";

import AuthProvider from "./authContext";
import LoginModalProvider from "./loginModalContext";

type ProviderProps = {
  children: ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <LoginModalProvider>
      <AuthProvider>{children}</AuthProvider>
    </LoginModalProvider>
  );
};

export default Provider;
