import { ReactNode } from "react";

export interface Pages {
  node: Path[];
}

interface Path {
  path: string;
  element: ReactNode;
}
