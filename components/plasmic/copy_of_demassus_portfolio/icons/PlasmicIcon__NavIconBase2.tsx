// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavIconBase2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavIconBase2Icon(props: NavIconBase2IconProps) {
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
          "M18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v7.31a4.49 4.49 0 00-1.5-.075V4a2 2 0 012-2h6.172c.028 0 .055.004.082.007.02.003.04.006.06.007.214.015.426.056.623.138.058.024.112.056.166.087l.05.029.048.024a.627.627 0 01.08.044c.078.053.148.116.22.18.01.01.023.02.036.03a.44.44 0 01.048.04l5.83 5.828A2 2 0 0120 9.828V20a2 2 0 01-2 2H9.49l1.5-1.5H18zm-.622-12L13.5 4.621V8a.5.5 0 00.5.5h3.378zM6.484 22.53a.745.745 0 001.061 0l4.408-4.408a3.466 3.466 0 10-4.902-4.903l-.036.036-.036-.036a3.468 3.468 0 10-4.903 4.903l4.408 4.408z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NavIconBase2Icon;
/* prettier-ignore-end */
