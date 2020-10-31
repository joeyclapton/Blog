import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Avatar from '../Avatar/avatar'
import S from './profile.style'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, position },
    },
  } = useStaticQuery(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile
