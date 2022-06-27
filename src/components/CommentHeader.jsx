import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import Reply from './Reply'
import Avatar from './Avatar'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div + div {
    margin-block-start: 0px;
  }
`

const CommentHeader = ({user, createdAt, currentUser, setReplyToggle}) => {
  let UserOptions;
  if (currentUser) {
    if (user.username == currentUser.username) {
      UserOptions = lazy(() => import('./UserOptions'))
    }
  }
  return (
  <Header>
    <Avatar 
      user={user} 
      createdAt={createdAt}
      currentUser={currentUser}
    />
    {(UserOptions) ? 
    <Suspense>
      <UserOptions/> 
    </Suspense>: <Reply setReplyToggle={setReplyToggle}/>}
  </Header>
  )
}

export default CommentHeader