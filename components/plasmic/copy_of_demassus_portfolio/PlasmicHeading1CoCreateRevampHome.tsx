// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nhZ9m14m3GkNgmNfUwqFT
// Component: 8JHoE6y-ALPT_M
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

import { useScreenVariants as useScreenVariants_1RKeZzinsHHbtQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1rKEZzinsHHbtQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_demassus_portfolio.module.css"; // plasmic-import: 5nhZ9m14m3GkNgmNfUwqFT/projectcss
import sty from "./PlasmicHeading1CoCreateRevampHome.module.css"; // plasmic-import: 8JHoE6y-ALPT_M/css

import ArrowUpRightIcon from "./icons/PlasmicIcon__ArrowUpRight"; // plasmic-import: qDFJrx7nAsaBMk/icon

export type PlasmicHeading1CoCreateRevampHome__VariantMembers = {};

export type PlasmicHeading1CoCreateRevampHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeading1CoCreateRevampHome__VariantsArgs;
export const PlasmicHeading1CoCreateRevampHome__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHeading1CoCreateRevampHome__ArgsType = {};
type ArgPropType = keyof PlasmicHeading1CoCreateRevampHome__ArgsType;
export const PlasmicHeading1CoCreateRevampHome__ArgProps =
  new Array<ArgPropType>();

export type PlasmicHeading1CoCreateRevampHome__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  heading?: p.Flex<"div">;
  iconWrap?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultHeading1CoCreateRevampHomeProps {
  className?: string;
}

function PlasmicHeading1CoCreateRevampHome__RenderFunc(props: {
  variants: PlasmicHeading1CoCreateRevampHome__VariantsArgs;
  args: PlasmicHeading1CoCreateRevampHome__ArgsType;
  overrides: PlasmicHeading1CoCreateRevampHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1RKeZzinsHHbtQ()
  });

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
      href={"/cocreate" as const}
      platform={"nextjs"}
      target={"_blank" as const}
    >
      <div
        data-plasmic-name={"heading"}
        data-plasmic-override={overrides.heading}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heading
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly")
          ? "Jenius CoCreate Revamp Competition"
          : "Jenius CoCreate Revamp Competition"}
      </div>

      <div
        data-plasmic-name={"iconWrap"}
        data-plasmic-override={overrides.iconWrap}
        className={classNames(projectcss.all, sty.iconWrap)}
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
  root: ["root", "heading", "iconWrap", "svg"],
  heading: ["heading"],
  iconWrap: ["iconWrap", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  heading: "div";
  iconWrap: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeading1CoCreateRevampHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeading1CoCreateRevampHome__VariantsArgs;
    args?: PlasmicHeading1CoCreateRevampHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeading1CoCreateRevampHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeading1CoCreateRevampHome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeading1CoCreateRevampHome__ArgProps,
      internalVariantPropNames: PlasmicHeading1CoCreateRevampHome__VariantProps
    });

    return PlasmicHeading1CoCreateRevampHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeading1CoCreateRevampHome";
  } else {
    func.displayName = `PlasmicHeading1CoCreateRevampHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHeading1CoCreateRevampHome = Object.assign(
  // Top-level PlasmicHeading1CoCreateRevampHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heading: makeNodeComponent("heading"),
    iconWrap: makeNodeComponent("iconWrap"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHeading1CoCreateRevampHome
    internalVariantProps: PlasmicHeading1CoCreateRevampHome__VariantProps,
    internalArgProps: PlasmicHeading1CoCreateRevampHome__ArgProps
  }
);

export default PlasmicHeading1CoCreateRevampHome;
/* prettier-ignore-end */
