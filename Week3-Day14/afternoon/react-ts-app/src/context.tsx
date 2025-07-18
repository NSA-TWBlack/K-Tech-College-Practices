// Create LoginContext to manage login state
import { createContext } from "react";

export interface LoggedInUser {
  email: string;
  // các trường khác nếu có
}

export interface AuthResponse {
  loggedInUser: LoggedInUser;
  access_token: string;
  refresh_token: string;
}

export const LoginContext = createContext<{
  user: AuthResponse | null;
  setUser: (user: AuthResponse | null) => void;
}>({
  user: null,
  setUser: () => {},
});
