import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.position}</h2>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  )
}

export default Profile
