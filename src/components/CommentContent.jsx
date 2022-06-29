import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'
import CommentHeader from './CommentHeader'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 1;
  flex: 1;

  .comment-main {
    margin-block: 1rem;
  }

  .replyTo {
    font-weight: 500;
    color: hsl(238, 40%, 52%);
  }
`

const TextArea = styled.textarea`
  inline-size: 100%;
  resize: none;
  border-radius: 10px;
  height: 7rem;
  padding-block: .5rem;
  padding-inline: 1rem;
  font-size: 1rem;
  margin-block: 1rem;
`

const Btn = styled.button`
  padding-block: .5rem;
  padding-inline: 1rem;
  color: #fff;
  background-color: hsl(238, 40%, 52%);
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  block-size: 3rem;
  cursor: pointer;
  position: absolute;
  bottom: .8rem;
  right: .8rem;

  :hover {
    background-color: hsl(239, 57%, 85%);
  }

  @media (min-width: 740px) {
    margin-inline-start: calc(100% - 100px);
    position: static;

 
  }
`

const CommentContent = ({comments, comment, currentUser, setComments, commentId, setReplyToggle, isreply}) => {
  const [edit, setEdit] = useState(false)
  const [editContent, setEditContent] = useState(comment.content)
  const [del, setDel] = useState(false)

  const Delete = lazy(() => import('./Delete')) ; 

  let {createdAt, user} = comment;
  let replyingTo;
  if (comment.replyingTo) {
    replyingTo = <span className="replyTo">
      @{comment.replyingTo},
    </span>
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEditContent(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    let newComment = Object.assign(comment)
    newComment.content = editContent
    newComment.createdAt = Date.now()
    

    let comments_map = Array.from(comments)
    comments_map.map(comment => {
      if (comment.replies.length == 0) return;
      comment.replies.map(reply => {
        if (reply.id == comment.id) {
          reply = newComment;
          return reply
        }
      })
    })
   
    setComments(comments_map)
    setEdit(false)
  }

  return (
    <Main>
      
      <div className="main-container">

        <CommentHeader 
          user={user}
          createdAt={createdAt}
          currentUser={currentUser}
          setReplyToggle={setReplyToggle}
          setDel={setDel}
          setEdit={setEdit}
          edit={edit}
        />
        {
          (edit) ? 
          <TextArea 
          defaultValue={comment.content}
          onChange={handleEdit}
          placeholder='Add a comment...' className="comment-section"
          autoFocus
          >
          </TextArea>:
          <main className="comment-main">
            {replyingTo}  {comment.content}
          </main>
        }

        {
          (edit) ? 
          <Btn
            onClick={handleUpdate}
          >UPDATE</Btn>
          : null
        }
      </div>
      {
        (del) ?
        <Suspense>
          <Delete
            setComments={setComments}
            setDel={setDel}
            comments={comments}
            comment={comment}
            isreply={isreply}
            commentId={commentId}
          />
        </Suspense>
        : null
      }
    </Main>
  )
}

export default CommentContent