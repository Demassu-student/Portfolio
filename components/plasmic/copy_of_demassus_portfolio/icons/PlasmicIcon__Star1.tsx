// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star1Icon(props: Star1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 28"}
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
          "M13 0l2.674 9.369L25.124 7l-6.776 7 6.776 7-9.45-2.369L13 28l-2.674-9.369L.876 21l6.776-7L.876 7l9.45 2.369L13 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star1Icon;
/* prettier-ignore-end */
