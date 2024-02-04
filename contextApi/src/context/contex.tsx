import { createContext, useContext, useState } from "react";

export type UserProps = {
  name: string;
  token: string;
};

export type AuthContextProps = {
  users: UserProps[] | null;
  login: (user: UserProps) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const login = (user: UserProps) => {
    setUsers([...users, user]);
  };

  const logout = () => {
    alert("Saindo...");
    setUsers([]);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
