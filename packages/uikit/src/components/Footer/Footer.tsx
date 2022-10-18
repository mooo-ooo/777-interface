import React from "react";
import { Flex } from "../Box";
import { StyledFooter, StyledList, StyledListItem, StyledEighteen, StyledCopy } from "./styles";

import { LogoWithTextIcon } from "../Svg";
import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({ items, ...props }) => {
  return (
    <StyledFooter data-theme="dark" p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent="center"
          alignItems="flex-start"
          className="footer-menu"
          mb={["0", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
            </StyledList>
          ))}
        </Flex>
        <Flex flexDirection={["column", null, "row"]} justifyContent="space-between" mt={["24px", null, "0"]}>
          <Flex flexDirection="row">
            <Flex alignItems="center">
              <LogoWithTextIcon isDark width="160px" />
            </Flex>
            <StyledEighteen>18+</StyledEighteen>
          </Flex>
          <StyledCopy>Gambling can be addictive. Play responsibly. 2022 © Betkub.com All rights reserved.</StyledCopy>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
