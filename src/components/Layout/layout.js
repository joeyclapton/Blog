import React from 'react'

import Profile from '../Profile/profile'
import S from './layout.style'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain></S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout
