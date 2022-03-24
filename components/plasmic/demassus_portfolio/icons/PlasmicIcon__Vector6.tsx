// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 182 187"}
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

      <g filter={"url(#PeqOgzrJr2Qa)"}>
        <path
          d={
            "M90.556 186.706c50.013 0 90.556-41.795 90.556-93.353C181.112 41.796 140.569 0 90.556 0S0 41.796 0 93.353c0 51.558 40.543 93.353 90.556 93.353z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"PeqOgzrJr2Qa"}
          x={"0"}
          y={"-3"}
          width={"184.112"}
          height={"189.706"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"3"} dy={"-3"}></feOffset>

          <feGaussianBlur stdDeviation={"3.5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0.313189 0 0 0 0 0.241458 0 0 0 0 0.475 0 0 0 1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_474_24452"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
