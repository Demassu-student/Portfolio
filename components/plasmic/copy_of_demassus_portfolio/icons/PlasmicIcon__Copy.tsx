// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyIcon(props: CopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.167 12.5h-.834a1.667 1.667 0 01-1.666-1.667v-7.5a1.667 1.667 0 011.666-1.666h7.5A1.666 1.666 0 0112.5 3.333v.834M9.167 7.5h7.5c.92 0 1.666.746 1.666 1.667v7.5c0 .92-.746 1.666-1.666 1.666h-7.5c-.92 0-1.667-.746-1.667-1.666v-7.5c0-.92.746-1.667 1.667-1.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.67"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CopyIcon;
/* prettier-ignore-end */
