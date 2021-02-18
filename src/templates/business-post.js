import React from "react"
import PropTypes from "prop-types"
import TagList from "../components/TagList"
import Helmet from "react-helmet"
import SEO from "../components/SEO/SEO"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import { FaUtensils } from "react-icons/fa"

export const BusinessPostTemplate = ({
  data,
  location,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  langKey,
  frontmatter,
}) => {
  const PostContent = contentComponent || Content
  const iconStyles = { fill: "black" }
  const fe = frontmatter

  return (
    <section className="section business-info">
      {helmet || ""}
      <div className="container content grid-section">
        <div className="columns general-info">
          <div className="column">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p className="type">
              <FaUtensils
                className="utensils-icon"
                size="1em"
                style={iconStyles}
              />
              {fe.business_type}
            </p>
            <img src="/img/business-page-image.png" />
            <div className="tabs">
              <ul>
                <li className="is-active">
                  <a>Story</a>
                </li>
                <li>
                  <a>Menu</a>
                </li>
                <li>
                  <a>Photos</a>
                </li>
              </ul>
            </div>
            <div className="story-content">
              <div className="mobile-info">
                <div>
                  <div className="grid-section">
                    <div>Location</div>
                    <div> 1234 Main St City, ST 56789</div>
                  </div>
                  <div className="grid-section">
                    <div>Phone</div>
                    <div>(123) 456-7890</div>
                  </div>
                  <div className="grid-section">
                    <div>Website</div>
                    <div>businessname.com</div>
                  </div>
                  <div className="grid-section">
                    <div>Hours</div>
                    <div className="hours-list">
                      <div className="grid-section">
                        <div>Mon</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                      <div className="grid-section">
                        <div>Tue</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                      <div className="grid-section">
                        <div>Wed</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                      <div className="grid-section">
                        <div>Thu</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                      <div className="grid-section">
                        <div>Fri</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>{description}</p>
              <PostContent content={content} className="post-content" />
            </div>
            <div className="menu-content">
              <div className="grid-section">
                <div>
                  <img src="/img/business-menu-1.png" />
                </div>
                <div>
                  <img src="/img/business-menu-2.png" />
                </div>
              </div>
            </div>
            <div className="photo-content">
              <div className="grid-section left">
                <div className="grid-section">
                  <div>
                    <img src="/img/business-page-1.png" />
                  </div>
                  <div>
                    <img src="/img/business-page-6.png" />
                  </div>
                </div>
                <div>
                  <img src="/img/business-page-3.png" />
                </div>
              </div>
              <div className="grid-section right">
                <div>
                  <img src="/img/business-page-3.png" />
                </div>
                <div className="grid-section">
                  <div>
                    <img src="/img/business-page-4.png" />
                  </div>
                  <div>
                    <img src="/img/business-page-5.png" />
                  </div>
                </div>
              </div>
            </div>
            <TagList tags={tags} langKey={langKey} />
          </div>
        </div>
        <div className="fixed-info">
          <div className="fixed-inner">
            <div className="grid-section">
              <div>Location</div>
              <div> 1234 Main St City, ST 56789</div>
            </div>
            <div className="grid-section">
              <div>Phone</div>
              <div>(123) 456-7890</div>
            </div>
            <div className="grid-section">
              <div>Website</div>
              <div>businessname.com</div>
            </div>
            <div className="grid-section">
              <div>Hours</div>
              <div className="hours-list">
                <div className="grid-section">
                  <div>Mon</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
                <div className="grid-section">
                  <div>Tue</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
                <div className="grid-section">
                  <div>Wed</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
                <div className="grid-section">
                  <div>Thu</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
                <div className="grid-section">
                  <div>Fri</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BusinessPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  location: PropTypes.string,
  tags: PropTypes.array,
  langKey: PropTypes.string,
}

const BusinessPost = ({ data, location }) => {
  const { markdownRemark: post } = data
  const jsonData = data.allArticlesJson.edges[0].node.articles
  const langKey = post.frontmatter.lang
  const image = post.frontmatter.primary_image.childImageSharp.fluid.src

  return (
    <Layout
      className="container"
      data={data}
      jsonData={jsonData}
      location={location}
    >
      <SEO frontmatter={post.frontmatter} postImage={image} isBlogPost />
      <BusinessPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        langKey={langKey}
        frontmatter={post.frontmatter}
      />
    </Layout>
  )
}

BusinessPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default BusinessPost

export const pageQuery = graphql`
  query BusinessPostByID($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            cn
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        primary_image {
          childImageSharp {
            fluid(maxWidth: 1380) {
              src
            }
          }
        }
        description
        date
        tags
        lang
        story
        business_type
        services_offered
        address
        phone
        tags
        homepage_link
        instagram_link
        facebook_link
        twitter_link
      }
    }
  }
`