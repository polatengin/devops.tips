import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "./layout";
import SEO from "./seo";
import PostItem from "./post-item";

interface Author {
  alias: string;
  name: string;
}

export default ({ pageContext }) => {
  const author: Author = pageContext.author.frontmatter.author;
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            path
            description
            category
            time
            date(formatString: "MMMM DD, YYYY")
            author {
              name
              alias
              profilePictureUri
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.nodes.map(post => {
    if (post.frontmatter.author.alias === author.alias)
      return post;
  });

  return (
    <Layout>
      <SEO title={ author.name } description={ `${author.name} posts` } />
      <article className="text-gray-700 dark:text-gray-50 border-b pb-4" itemScope itemType="http://schema.org/Author" >
        <header className="mb-4">
          <h1 itemProp="headline" className="text-3xl">{ author.name } Posts</h1>
        </header>
      </article>
      <ul>
      { posts.map((post, index) => {
        return (
          <li key={index}>
            <PostItem post={post} />
          </li>
        );
      }) }
      </ul>
    </Layout>
  );
};
