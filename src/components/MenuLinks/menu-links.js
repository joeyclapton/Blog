import React from 'react'

import links from './content'

import S from './menu-links.style'

const getLinks = () =>
  links.map((link, index) => {
    return (
      <S.MenuLinksLink to={link.url} activeClassName="active">
        {link.label}
      </S.MenuLinksLink>
    )
  })

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>{getLinks()}</S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
