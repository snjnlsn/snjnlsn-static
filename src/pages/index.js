import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="coming soon" />
    <div>
      <div className="about-text">
        <h1 className="text-block" id="hi">this is a work in progress</h1>
        <p className="text-block">please come back soon</p>
      </div>
      <div className="follow-me">
        <a href="https://www.instagram.com/snjnlsn">
          <button>
            insta
          </button>
        </a>
        <a href="https://www.github.com/snjnlsn">
          <button>
            github
          </button>
        </a>
      </div>
    </div>
  </Layout>
)


export default IndexPage
