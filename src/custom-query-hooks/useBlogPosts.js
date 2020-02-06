import { useStaticQuery, graphql } from 'gatsby'

export const useBlogPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogPostQuery {
      allMarkdownRemark(
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              path
            }
          }
        }
      }
    }
  `)
  return [allMarkdownRemark.edges]
}
