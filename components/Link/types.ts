import { AnchorHTMLAttributes } from "react"
import { TextProps } from "rebass"

export interface LinkProps extends TextProps {
  external?: boolean
}