import React from 'react'
import styled from 'styled-components'
import CommentHeader from './CommentHeader'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 1;
  flex: 1;

  .replyTo {
    font-weight: 500;
    color: hsl(238, 40%, 52%);
  }
`

const CommentContent = ({comments, comment, currentUser, setComments, commentId, setReplyToggle}) => {

  let {createdAt, user} = comment;
  let replyingTo;
  if (comment.replyingTo) {
    replyingTo = <span className="replyTo">
      @{comment.replyingTo},
    </span>
  }

  return (
    <Main>  
        <CommentHeader 
          user={user}
          createdAt={createdAt}
          currentUser={currentUser}
          comments={comments}
          commentId={commentId}
          setComments={setComments}
          setReplyToggle={setReplyToggle}
        />
        <main className="comment-main">
          {replyingTo}  {comment.content}
        </main>
    </Main>
  )
}

export default CommentContent