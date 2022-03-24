// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M18.52 0H1.477C.66 0 0 .645 0 1.441v17.114C0 19.352.66 20 1.477 20H18.52c.816 0 1.48-.648 1.48-1.441V1.44C20 .645 19.336 0 18.52 0zM5.934 17.043h-2.97V7.496h2.97v9.547zM4.449 6.195a1.72 1.72 0 11-.006-3.439 1.72 1.72 0 01.006 3.44zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H7.797V7.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
