// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavIconBaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavIconBaseIcon(props: NavIconBaseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M15.989 4l-1.503 1.5H5.25l-.144.006A1.75 1.75 0 003.5 7.25v2.24l2.61-1.64a2.25 2.25 0 013.008.569l.095.139a2.25 2.25 0 01.163 2.082l-.079.166-1.208 2.286a.75.75 0 00.933 1.05l.098-.046 1.76-.993a.75.75 0 01.826 1.247l-.085.057-1.765.996a2.25 2.25 0 01-3.163-2.867l.07-.145 1.208-2.286a.75.75 0 00-.964-1.037l-.098.052L3.5 11.262v5.493c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 001.75-1.75V9.443L22 7.946v8.809a3.25 3.25 0 01-3.25 3.25H5.25A3.25 3.25 0 012 16.755V7.25a3.25 3.25 0 013.066-3.245L5.25 4h10.739zm5.186-.455l.13.12.121.13a2.269 2.269 0 01-.121 3.08l-4.281 4.273a2.25 2.25 0 01-.943.562l-2.327.7a1 1 0 01-1.24-1.265l.739-2.295c.11-.34.299-.65.552-.903l4.29-4.283a2.27 2.27 0 013.08-.12v.001zm-2.02 1.18l-4.29 4.284a.751.751 0 00-.184.3l-.447 1.39 1.416-.425a.752.752 0 00.314-.188l4.28-4.273.075-.086a.769.769 0 00-1.163-1.002h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NavIconBaseIcon;
/* prettier-ignore-end */
