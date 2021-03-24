import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo mollitia numquam quos. Aperiam architecto dolorum ea hic nostrum nulla perferendis qui ratione reprehenderit, similique.</p>
      <p><Link to="/contact">sdf</Link></p>
    </Layout>
  )
}

export default AboutPage
