import React from 'react'

import S from './post-item.style'

const PostItem = () => (
  <S.PostItemLink>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>10 de Agosto de 2020 • 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Mostrando últimos posts e vídeos no Github Profile
        </S.PostItemTitle>
        <S.PostItemDescription>
          Como utilizar o Github Actions para manter seu profile atualizado e
          bonito.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
