/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const parentCss = {
    position: "relative",
    height: "100%",
    width: "100%",
    margin: "0 auto",
    padding: "50px 0px",
    background: 'black',
  }

  const childCss = {
    color: 'white',
    background: 'pink',
    width: '200px',
    height: '100%',
    margin: '-70px 0 0 - 120px',
    position: 'absolute',
    top: '50 %',
    left: '50 %',
    padding: '20px',
  }


  return (
    <>
      {/* <Header siteTitle="{data.site.siteMetadata.title}" /> */}
        <main style={parentCss}>
          <article style={childCss}>
          {children}
          </article>
        </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
