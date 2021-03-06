// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: acAbPTRfEA5TzDYgnbrAMH
// Component: JdxR9zkJl5dx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: tJOiYAtf8Y/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gTluP_cJPIHI/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_solid_project_test.module.css"; // plasmic-import: acAbPTRfEA5TzDYgnbrAMH/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: JdxR9zkJl5dx/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: x-P7UYDsQGl/icon
import DownChevronIcon from "./icons/PlasmicIcon__DownChevron"; // plasmic-import: Vipwurzapt/icon
import solidLogopngNyZWsecyk from "./images/solidLogopng.png"; // plasmic-import: nyZWsecyk/picture
import solidBgDarkUisvg1YwBsOVo from "./images/solidBgDarkUisvg.svg"; // plasmic-import: 1YwBsOVo_/picture
import solidPodToursvg7TNslkVCc from "./images/solidPodToursvg.svg"; // plasmic-import: 7t_nslkVCc/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            hasGap={true}
            className={classNames(defaultcss.all, sty.navbar)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___9GNgf)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__gb0Wk)}
              >
                <img
                  data-plasmic-name={"solidLogo"}
                  data-plasmic-override={overrides.solidLogo}
                  alt={""}
                  className={classNames(defaultcss.img, sty.solidLogo)}
                  role={"img"}
                  src={solidLogopngNyZWsecyk}
                />

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__tvWPl
                  )}
                >
                  {"SOLID"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__ax9Ab)}
              >
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.link___2D3Yy)}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__iuaGp)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__aBK
                    )}
                  >
                    {"About Solid"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__tiu0B)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.link__ryzmy)}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__a9EBa)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__cHFxR
                    )}
                  >
                    {"Developers"}
                  </div>

                  {true ? (
                    <DownChevronIcon
                      className={classNames(defaultcss.all, sty.svg___454Qc)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.link__avgRn)}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg___3Eyu3)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__mMb8
                    )}
                  >
                    {"Users"}
                  </div>

                  {true ? (
                    <DownChevronIcon
                      className={classNames(defaultcss.all, sty.svg___8RjX)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.link__lxjCx)}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__mvwPh)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__k4Xsm
                    )}
                  >
                    {"Community"}
                  </div>

                  {true ? (
                    <DownChevronIcon
                      className={classNames(defaultcss.all, sty.svg___0I5Kj)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>

              {false ? (
                <div className={classNames(defaultcss.all, sty.freeBox__grg7)}>
                  <button
                    className={classNames(
                      defaultcss.button,
                      defaultcss.__wab_text,
                      sty.button___6KjWq
                    )}
                  >
                    {"Sign up"}
                  </button>

                  <p.Stack
                    as={"a"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.link__p5Pvm)}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg___0M97U)}
                        role={"img"}
                      />
                    ) : null}

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__d3PVr
                      )}
                    >
                      {"Log in"}
                    </div>

                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg__gjeGh)}
                        role={"img"}
                      />
                    ) : null}
                  </p.Stack>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(defaultcss.all, sty.hero)}
          >
            <div
              data-plasmic-name={"hero2"}
              data-plasmic-override={overrides.hero2}
              className={classNames(defaultcss.all, sty.hero2)}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__lK9Is)}
                role={"img"}
                src={solidBgDarkUisvg1YwBsOVo}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"foreground2"}
                data-plasmic-override={overrides.foreground2}
                hasGap={true}
                className={classNames(defaultcss.all, sty.foreground2)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__pbdbC)}
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__fYkMc)}
                    role={"img"}
                    src={solidLogopngNyZWsecyk}
                  />

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__kp7WD
                    )}
                  >
                    <span>
                      <span style={{ fontWeight: 700 }}>
                        {"Solid: Your data, your choice."}
                      </span>
                      <React.Fragment>{"\n"}</React.Fragment>
                      <span style={{ fontWeight: 700 }}>
                        {"Advancing Web standards to empower people."}
                      </span>
                    </span>
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__yvNih)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__yapX6)}
                  />

                  <Button
                    className={classNames("__wab_instance", sty.button__esx0P)}
                  />
                </p.Stack>
              </p.Stack>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___24BMa)}>
              <div className={classNames(defaultcss.all, sty.freeBox__jlw89)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__ubMoS)}
                  role={"img"}
                  src={solidPodToursvg7TNslkVCc}
                />

                <div className={classNames(defaultcss.all, sty.freeBox__yv87E)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__moS4
                    )}
                  >
                    <span>
                      <span style={{ fontWeight: 700 }}>{"Solid"}</span>
                      <React.Fragment>
                        {
                          " is a specification that lets people store their data securely in decentralized data stores called Pods. Pods are like secure personal web servers for data. When data is stored in someone's Pod, they control which people and applications can access it."
                        }
                      </React.Fragment>
                    </span>
                  </div>

                  <p.Stack
                    as={"a"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.link__qjAhd)}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg__nUvCf)}
                        role={"img"}
                      />
                    ) : null}

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__tOhb
                      )}
                    >
                      {"Learn More"}
                    </div>

                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg__maqSi)}
                        role={"img"}
                      />
                    ) : null}
                  </p.Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbar", "solidLogo", "hero", "hero2", "foreground2"],
  navbar: ["navbar", "solidLogo"],
  solidLogo: ["solidLogo"],
  hero: ["hero", "hero2", "foreground2"],
  hero2: ["hero2", "foreground2"],
  foreground2: ["foreground2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    solidLogo: makeNodeComponent("solidLogo"),
    hero: makeNodeComponent("hero"),
    hero2: makeNodeComponent("hero2"),
    foreground2: makeNodeComponent("foreground2"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
