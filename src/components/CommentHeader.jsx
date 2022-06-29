import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import Reply from './Reply'
import Avatar from './Avatar'
import UserOptions from './UserOptions'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div + div {
    margin-block-start: 0px;
  }
`

const CommentHeader = ({user, createdAt, currentUser, setReplyToggle, setDel, setEdit, edit}) => {

  let out;

  if (currentUser && edit) {
    out = null
  }else {
    if (currentUser) {
      if (user.username == currentUser.username) {

        out = <UserOptions
          setDel={setDel}
          setEdit={setEdit}
        />
      }else {
        out = <Reply setReplyToggle={setReplyToggle}/>
      }
    }
  }

  return (
  <Header>
    <Avatar 
      user={user} 
      createdAt={createdAt}
      currentUser={currentUser}
    />

    {out}

  </Header>
  )
}

export default CommentHeader