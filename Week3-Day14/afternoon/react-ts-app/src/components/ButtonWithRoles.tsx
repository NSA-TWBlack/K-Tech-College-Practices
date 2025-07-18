import { type ReactNode } from "react";
import { useAuthStore } from "../useAuthStore";

type ButtonWithRolesProps = {
  allowedRoles: string[];
  children: ReactNode;
  [key: string]: any;
};

export default function ButtonWithRoles({
  allowedRoles,
  children,
  ...props
}: ButtonWithRolesProps) {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  const hasRole = loggedInUser?.roles.some((role) =>
    allowedRoles.includes(role.name)
  );

  if (!hasRole) return null;

  return <button {...props}>{children}</button>;
}
