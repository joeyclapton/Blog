import React from 'react'

import links from './content'

import S from './social-links.style'

const getLinks = () =>
  links.map((link, index) => {
    const Icon = link.icon

    return (
      <S.SocialLinksItem key={index}>
        <S.SocialLinksLink
          href={link.url}
          title={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    )
  })

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>{getLinks()}</S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
