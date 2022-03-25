// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 97 100"}
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

      <g filter={"url(#jMjKXJgGdkNa)"}>
        <path
          d={
            "M48.298 99.58c26.674 0 48.297-22.292 48.297-49.79C96.595 22.292 74.972 0 48.298 0 21.624 0 0 22.292 0 49.79c0 27.498 21.624 49.79 48.298 49.79z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"jMjKXJgGdkNa"}
          x={"-3"}
          y={"0"}
          width={"99.595"}
          height={"102.579"}
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

          <feOffset dx={"-3"} dy={"3"}></feOffset>

          <feGaussianBlur stdDeviation={"5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_474_24453"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
