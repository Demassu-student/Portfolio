// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type NavBarButtonValue = "selectedWork" | "unnamedVariant";
export const NavBarButtonContext = React.createContext<
  NavBarButtonValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useNavBarButton() {
  return React.useContext(NavBarButtonContext);
}

export default NavBarButtonContext;
/* prettier-ignore-end */
