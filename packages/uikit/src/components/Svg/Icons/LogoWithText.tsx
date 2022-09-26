import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return <img src="/logoFull.png" style={{ height: 30 }} alt="logo" />;
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
