import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { motion } from "framer-motion"
import styled from "styled-components"

const BigHeading = styled.h1`
  color: red;
  background-color: yellow;
`
const SmallHeading = styled.h3`
  color: blue;
  background-color: pink;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BigHeading>Hi people</BigHeading>
    <SmallHeading>Im shilpi</SmallHeading>
    <motion.h2 whileHover={{ scale: 1.2 }}>Lets scale</motion.h2>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
