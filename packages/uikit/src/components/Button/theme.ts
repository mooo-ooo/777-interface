import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "#00ffc2",
    color: "#151d24",
    backgroundHover: `url("/images/button/primary.svg")`,
  },
  [variants.SECONDARY]: {
    backgroundHover: `url("/images/button/secondary.svg")`,
    backgroundColor: "#ffffff",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "white",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
    backgroundHover: `url("/images/button/secondary.svg")`,
  },
};
