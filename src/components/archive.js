import React from 'react'
import { Link } from 'gatsby'
import { useBlogPosts } from '../custom-query-hooks/useBlogPosts'

import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #534763;
  }
`
const RightColumn = styled.aside`
  text-align: center;
`

const Archive = () => {
  const [edges] = useBlogPosts()

  return (
    <>
      <RightColumn>
        <h3>Archive</h3>
        <ArchiveList>
          {edges &&
            edges.map(edge => (
              <li key={edge.node.id}>
                <Link to={`/posts${edge.node.frontmatter.path}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
        </ArchiveList>
      </RightColumn>
    </>
  )
}

export default Archive
