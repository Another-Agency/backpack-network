"use client";

import { ReactNode, useEffect } from "react";

interface DarkModeManagerProps {
  children: ReactNode;
}

export default function DarkModeManager({ children }: DarkModeManagerProps) {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark");
    }
  }, []);

  return <>{children}</>;
}
