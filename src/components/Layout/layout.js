import React from 'react'

import Sidebar from '../Sidebar/sidebar'

import S from './layout.style'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Sidebar />
      </aside>
      <S.LayoutMain></S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout
