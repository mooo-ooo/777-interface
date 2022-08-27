import React from "react"
import { useTheme } from "styled-components"
import { Heading } from "rebass"
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles"
import { ModalProps } from "./types"

interface Props extends ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => {
  const theme = useTheme()
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      <ModalHeader background={headerBackground}>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <Heading color="#bc3553" fontWeight="100">{title}</Heading>
        </ModalTitle>
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  )
}

export default Modal
