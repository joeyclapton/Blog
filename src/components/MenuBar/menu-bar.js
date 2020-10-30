import React from 'react'

import { Home } from '@styled-icons/feather/Home'
import { ArrowUp } from '@styled-icons/feather/ArrowUp'
import { LightDown } from '@styled-icons/entypo/LightDown'
import { Grid } from '@styled-icons/feather/Grid'
import { Search } from '@styled-icons/feather/Search'

import S from './menu-bar.style'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <LightDown />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <ArrowUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
