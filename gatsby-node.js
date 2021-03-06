const path = require(`path`);
const fs = require("fs");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allPosts = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            path
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  const posts = allPosts.data.allMarkdownRemark.nodes;

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

    createPage({
      path: `${post.frontmatter.path}`,
      component: path.resolve(`./src/components/blog-post-template.tsx`),
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });

  const allAuthors = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
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
  allAuthors.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/author/${node.frontmatter.author.alias}`,
      component: path.resolve(`./src/components/author-template.tsx`),
      context: {
        author: node
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
};

exports.onPostBuild = async ({ graphql }) => {
  await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              date
              title
              description
            }
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    const postsPath = "./public/api";

    if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath);

    const posts = result.data.posts.edges.map(e => {
      return {
        ...e.node.frontmatter,
        url: `https://devopstips.net/${e.node.frontmatter.path}`,
        path: `https://raw.githubusercontent.com/polatengin/devopstips.net/master/_posts/${e.node.fileAbsolutePath.substring(e.node.fileAbsolutePath.lastIndexOf("/") + 1)}`
      };
    });

    fs.writeFileSync(`${postsPath}/posts.json`, JSON.stringify(posts));
  });
};
