import React from 'react'

import Sidebar from '../Sidebar/sidebar'
import MenuBar from '../MenuBar/menu-bar'
import PostItem from '../PostItem/post-item'

import S from './layout.style'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Sidebar />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

export default Layout
