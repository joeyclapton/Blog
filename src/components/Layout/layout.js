import React from 'react'

import Profile from '../Profile/profile'
import S from './layout.style'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain></S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout
