// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 380 248"}
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

      <g filter={"url(#ElCGQJc_KpIa)"}>
        <path
          d={
            "M380 124.186s-9.952 14.329-27.187 33.249C319.389 194.103 258.598 248 190 248c-72.438 0-136.186-60.123-168.168-96.587C7.914 135.56 0 124.167 0 124.167s7.518-10.872 20.823-26.149C52.463 61.591 116.787 0 190 0c69.535 0 131.066 55.57 164.184 92.35C370.571 110.582 380 124.186 380 124.186z"
          }
          fill={"currentColor"}
          fillOpacity={".8"}
        ></path>
      </g>

      <defs>
        <filter
          id={"ElCGQJc_KpIa"}
          x={"0"}
          y={"-5"}
          width={"392"}
          height={"263"}
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

          <feOffset dy={"10"}></feOffset>

          <feGaussianBlur stdDeviation={"20"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_474_24469"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"12"} dy={"-5"}></feOffset>

          <feGaussianBlur stdDeviation={"15"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.373421 0 0 0 0 0.036875 0 0 0 0 0.491667 0 0 0 0.5 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_474_24469"}
            result={"effect2_innerShadow_474_24469"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
