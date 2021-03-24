import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from "../components/Hero"
import BlurBackground from '../components/background'


const MainPage = () => {
  return (
    <Layout>
      <BlurBackground/>
      <Hero/>
      <h1>Hello</h1>
      <h2>I'm Roman</h2>
      <p>Need a developer? <Link to="/contact">contact me</Link></p>
    </Layout>
  )
}

export default MainPage;