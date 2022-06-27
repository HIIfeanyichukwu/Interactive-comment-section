import React from 'react'
import styled from 'styled-components'
import Reply from './Reply'
import Avatar from './Avatar'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const CommentHeader = () => {
  return (
  <Header>
    <Avatar/>
    <Reply/>
  </Header>
  )
}

export default CommentHeader