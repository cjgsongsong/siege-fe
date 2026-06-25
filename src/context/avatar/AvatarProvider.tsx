import { useState, type ReactNode } from "react";
import { AvatarActionContext, AvatarContext } from "./AvatarContext";

export default function AvatarProvider({ children }: { children: ReactNode }) {
  const [isBlushing, setIsBlushing] = useState(false);

  return (
    <AvatarActionContext value={{ setIsBlushing }}>
      <AvatarContext value={{ isBlushing }}>{children}</AvatarContext>
    </AvatarActionContext>
  );
}
