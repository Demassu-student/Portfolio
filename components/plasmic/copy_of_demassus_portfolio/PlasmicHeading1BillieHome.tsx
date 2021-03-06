// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nhZ9m14m3GkNgmNfUwqFT
// Component: DbviKRX5ASQfVY
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_demassus_portfolio.module.css"; // plasmic-import: 5nhZ9m14m3GkNgmNfUwqFT/projectcss
import sty from "./PlasmicHeading1BillieHome.module.css"; // plasmic-import: DbviKRX5ASQfVY/css

import ArrowUpRightIcon from "./icons/PlasmicIcon__ArrowUpRight"; // plasmic-import: qDFJrx7nAsaBMk/icon

export type PlasmicHeading1BillieHome__VariantMembers = {};

export type PlasmicHeading1BillieHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeading1BillieHome__VariantsArgs;
export const PlasmicHeading1BillieHome__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHeading1BillieHome__ArgsType = {};
type ArgPropType = keyof PlasmicHeading1BillieHome__ArgsType;
export const PlasmicHeading1BillieHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHeading1BillieHome__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  heading3?: p.Flex<"div">;
  iconWrap3?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultHeading1BillieHomeProps {
  className?: string;
}

function PlasmicHeading1BillieHome__RenderFunc(props: {
  variants: PlasmicHeading1BillieHome__VariantsArgs;
  args: PlasmicHeading1BillieHome__ArgsType;
  overrides: PlasmicHeading1BillieHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={"/billie" as const}
      platform={"nextjs"}
      target={"_blank" as const}
    >
      <div
        data-plasmic-name={"heading3"}
        data-plasmic-override={overrides.heading3}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heading3
        )}
      >
        {"Billie - A personal Budgeting app"}
      </div>

      <div
        data-plasmic-name={"iconWrap3"}
        data-plasmic-override={overrides.iconWrap3}
        className={classNames(projectcss.all, sty.iconWrap3)}
      >
        <ArrowUpRightIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "heading3", "iconWrap3", "svg"],
  heading3: ["heading3"],
  iconWrap3: ["iconWrap3", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  heading3: "div";
  iconWrap3: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeading1BillieHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeading1BillieHome__VariantsArgs;
    args?: PlasmicHeading1BillieHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeading1BillieHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeading1BillieHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeading1BillieHome__ArgProps,
      internalVariantPropNames: PlasmicHeading1BillieHome__VariantProps
    });

    return PlasmicHeading1BillieHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeading1BillieHome";
  } else {
    func.displayName = `PlasmicHeading1BillieHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHeading1BillieHome = Object.assign(
  // Top-level PlasmicHeading1BillieHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heading3: makeNodeComponent("heading3"),
    iconWrap3: makeNodeComponent("iconWrap3"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHeading1BillieHome
    internalVariantProps: PlasmicHeading1BillieHome__VariantProps,
    internalArgProps: PlasmicHeading1BillieHome__ArgProps
  }
);

export default PlasmicHeading1BillieHome;
/* prettier-ignore-end */
