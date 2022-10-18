import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('TERMS AND CONDITIONS'),
    href: '/terms-and-conditions',
    isHighlighted: true,
  },
  {
    label: t('PRIVACY POLICY'),
    href: '/privacy-policy',
  },
  {
    label: t('RESPONSIBLE GAMING'),
    href: '/responsible-gaming',
  },
  {
    label: t('ABOUT US'),
    href: '/about-us',
  },
  {
    label: t('CONTACT US'),
    href: '/contact-us',
  },
  {
    label: t('FAQ'),
    href: '/faq',
  },
]
