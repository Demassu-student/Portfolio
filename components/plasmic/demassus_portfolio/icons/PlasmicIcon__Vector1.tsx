// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1Icon(props: Vector1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 236 168"}
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
          "M43 1C23.167 15-7.698 49.55 29 73.5c47.5 31 117-61.5 179.5-17s2.5 119.5-81.5 97C59.8 135.5 15 155 1 167"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
