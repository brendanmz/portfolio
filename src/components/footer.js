import React from 'react'
import { Github } from './icons/github'
import { AnchorSvg } from './A/AnchorSvg'
import { Linkedin } from './icons/linkedin'
import { StyledFooter } from './StyledFooter'

const Footer = () => (
  <StyledFooter>
    <span>© {new Date().getFullYear()} Brendan Moratz</span>
    <AnchorSvg href='https://github.com/brendanmz' target='_blank'>
      <Github />
    </AnchorSvg>
    <AnchorSvg
      href='https://www.linkedin.com/in/brendan-moratz-94406218b/'
      target='_blank'
    >
      <Linkedin />
    </AnchorSvg>
  </StyledFooter>
)

export default Footer
