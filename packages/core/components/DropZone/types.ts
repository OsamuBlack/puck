import { CSSProperties, ComponentPropsWithRef, ElementType } from "react";
import { DragAxis } from "../../types";

export type DropZoneProps<T extends ElementType = "div"> = {
  zone: string;
  allow?: string[];
  disallow?: string[];
  style?: CSSProperties;
  minEmptyHeight?: CSSProperties["minHeight"] | number;
  className?: string;
  collisionAxis?: DragAxis;
  as?: T;
} & Omit<ComponentPropsWithRef<T>, "zone" | "children" | "style" | "className" | "ref">;
