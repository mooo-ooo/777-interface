import React from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import { MdArrowBackIosNew, MdOutlineClose } from "react-icons/md"
import { IconButton } from "components/Button"
import { ModalProps } from "./types"

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: #cce6c9;
  display: flex;
  padding: 0px 24px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton onClick={onDismiss} aria-label="Close the dialog">
      <MdOutlineClose color="text" />
    </IconButton>
  );
}

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton onClick={onBack} area-label="go back" mr="8px">
      <MdArrowBackIosNew color="text" />
    </IconButton>
  );
}

export const ModalContainer = styled(Box)<{ minWidth: string, background?: string }>`
  overflow: hidden;
  background: ${({ theme, background }) => background || theme.modal.background};
  box-shadow: ${({ theme }) => `-1px 20px 36px -8px ${theme.colors.text}}, 0px 1px 1px ${theme.colors.text}}`};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`
