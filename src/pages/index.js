import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="coming soon" />
    <div>
      <div className="about-text">
        <span className="span-block" id="hi">issa work in progress</span>
        <span className="span-block" id="come-back">(plz come back soon)</span>
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
