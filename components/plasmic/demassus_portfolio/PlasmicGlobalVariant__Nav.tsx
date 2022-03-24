// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type NavValue = "navButtonBase";
export const NavContext = React.createContext<NavValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useNav() {
  return React.useContext(NavContext);
}

export default NavContext;
/* prettier-ignore-end */
