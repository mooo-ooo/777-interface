import React from "react";
import {
  StyledFooter,
  StyledSocialLinks,
} from "./styles";
import { FooterProps } from "./types";

const MenuItem: React.FC<FooterProps> = ({
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="space-around">
      <img src="/images/text-logo.png" alt="logo"/>
      <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
    </StyledFooter>
  );
};

export default MenuItem;
