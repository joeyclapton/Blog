import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem/post-item'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="PHI"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium"
      description="xxx"
    />
  </Layout>
)

export default IndexPage
