import React from 'react'

import Profile from '../Profile/profile'
import SocialLinks from '../SocialLinks/social-links'

import S from './sidebar.style'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
)

export default Sidebar
