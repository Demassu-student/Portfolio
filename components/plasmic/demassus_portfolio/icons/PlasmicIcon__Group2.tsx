// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 379 380"}
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
          "M378 1H1v377.059h377V1zm0 314.243H1m377-62.871H1m377-62.843H1m377-62.843H1m377-62.843H1M63.833 1v377.086M126.667 1v377.086M189.5 1v377.086M252.334 1v377.086M315.167 1v377.086"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
