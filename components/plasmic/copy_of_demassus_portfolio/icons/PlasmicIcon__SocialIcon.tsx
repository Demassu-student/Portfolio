// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIconIcon(props: SocialIconIconProps) {
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
          "M6.292 18.125c7.545 0 11.673-6.253 11.673-11.673 0-.176-.004-.356-.012-.532A8.332 8.332 0 0020 3.796a8.09 8.09 0 01-2.355.645 4.125 4.125 0 001.804-2.27 8.247 8.247 0 01-2.605.996A4.108 4.108 0 009.85 6.91a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 8.1a4.108 4.108 0 01-1.86-.512v.051a4.101 4.101 0 003.293 4.023 4.078 4.078 0 01-1.851.07 4.112 4.112 0 003.831 2.852A8.229 8.229 0 010 16.282a11.64 11.64 0 006.292 1.843z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIconIcon;
/* prettier-ignore-end */
