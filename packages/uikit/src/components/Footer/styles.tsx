import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.backgroundAlt};
  .footer-menu {
    gap: 34px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;

export const StyledEighteen = styled(Flex)`
  width: 46px;
  height: 46px;
  min-width: 46px;
  font-weight: bold;
  margin-left: 8px;
  color: #151d24;
  border-radius: 50%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const StyledCopy = styled(Flex)`
  color: #6e6d7a;
  line-height: 1.625;
  font-size: 12px;
  align-items: center;
`;
