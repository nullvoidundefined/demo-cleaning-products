import {
  Add as AddIcon,
  Cancel as CancelIcon,
  Error as ErrorIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

import { COLOR } from "../constant";

export const iconTypes = ["add", "cancel", "error", "view"] as const;

export type IconType = typeof iconTypes[number];

const typeToIconMap: Record<IconType, OverridableComponent<SvgIconTypeMap>> = {
  add: AddIcon,
  cancel: CancelIcon,
  error: ErrorIcon,
  view: ViewIcon,
};
interface IconProps {
  type: IconType;
  color?: string;
}

const Icon = ({ color, type }: IconProps) => {
  const IconFromMap = typeToIconMap[type];

  return (
    <IconFromMap style={{ fill: color ? color : COLOR.GRAYSCALE_MEDIUM }} />
  );
};

export { Icon };
