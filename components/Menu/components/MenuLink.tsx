import React, { AnchorHTMLAttributes } from "react"

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  return <a role="button" href={href} {...otherProps} />
}

export default MenuLink