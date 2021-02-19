import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "./layout";
import SEO from "./seo";
import { GitHubIcon, TimeIcon } from "./icons";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const fileName = post.fileAbsolutePath.replace(/^.*(\\|\/|\:)/, '');

  return (
    <Layout title={ siteTitle }>
      <SEO title={ post.frontmatter.title } description={ post.frontmatter.description || post.description } />
      <article className="text-gray-700 dark:text-gray-50 border-b pb-4" itemScope itemType="http://schema.org/Article" >
        <header className="mb-4">
          <h1 itemProp="headline" className="text-3xl">{ post.frontmatter.title }</h1>
          <p className="my-4 italic flex items-center"><TimeIcon className="w-5 h-5 inline mr-1" /> ~ { post.frontmatter.time } read · published @ { post.frontmatter.date }</p>
          <a className="inline-flex items-center text-blue-500" href={`https://github.com/polatengin/devops.tips/blob/master/_posts/${fileName}`} target="_blank"><GitHubIcon className="w-4 h-4 inline mr-1" /> Edit this page on GitHub</a>
        </header>
        <section className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
      </article>
      <nav className="text-gray-700 dark:text-gray-50 mt-4">
        <ul className="flex flex-wrap justify-between">
          <li>
            { previous && <Link to={previous.fields.slug} rel="prev">← {previous.frontmatter.title}</Link> }
          </li>
          <li>
            { next && <Link to={next.fields.slug} rel="next">{next.frontmatter.title} →</Link> }
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        time
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`