// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TooltipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TooltipIcon(props: TooltipIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 9"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.071.485c.891 0 1.337 1.077.707 1.707l-6.07 6.071a1 1 0 01-1.415 0l-6.071-6.07c-.63-.63-.184-1.708.707-1.708H14.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TooltipIcon;
/* prettier-ignore-end */
