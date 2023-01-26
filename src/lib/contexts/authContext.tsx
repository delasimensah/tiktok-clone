import { createContext, useState, ReactNode, FC } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type AuthProviderType = {
  children: ReactNode;
};

type AuthContextType = {
  user: AuthUser | null;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
