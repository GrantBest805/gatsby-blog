import React from 'react'
import { Link } from 'gatsby'
import { useBlogPosts } from '../custom-query-hooks/useBlogPosts'

import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #534763;
  }
`

const Listing = () => {
  const [edges] = useBlogPosts()

  return (
    <div>
      {edges &&
        edges.map(({ node }) => (
          <Post key={node.id}>
            <Link to={`/posts${node.frontmatter.path}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link class="read-more" to={`/posts${node.frontmatter.path}`}>
              Read More
            </Link>
          </Post>
        ))}
    </div>
  )
}

export default Listing
