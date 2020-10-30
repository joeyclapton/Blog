import React from 'react'

import Profile from '../Profile/profile'
import SocialLinks from '../SocialLinks/social-links'
import MenuLinks from '../MenuLinks/menu-links'

import S from './sidebar.style'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
