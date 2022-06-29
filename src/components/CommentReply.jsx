import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'
import Score from './Score'
import CommentContent from './CommentContent'

const CommentComponent = styled.div`
    display: flex;
    gap: 1rem;
    background-color: #fff;
    padding: .8rem;
    border-radius: 8px;
    line-height: 1.5;
    position: relative;
    flex-direction: column;

    & + & {
        margin-block-start: 1rem;
    }

    @media (min-width: 740px) {
        flex-direction: row;
    }
`

const CommentReply = ({reply, comments, setComments, commentId, currentUser}) => {
    const [replyToggle, setReplyToggle] = useState(false)
    const ReplyBox = lazy(() => import('./ReplyBox'))
  return (
    <>
        <CommentComponent className='comment-component'>
            <Score score={reply.score}/>
            <CommentContent
                comment={reply}
                currentUser={currentUser}
                commentId={commentId}
                comments={comments}
                setComments={setComments}
                setReplyToggle={setReplyToggle}
                isreply={true}
            />
        </CommentComponent>

        {
            (replyToggle) ?
            <Suspense>
                <ReplyBox
                    setReplyToggle={setReplyToggle}
                    user={reply.user}
                    comments={comments}
                    commentId={commentId}
                    setComments={setComments}
                    currentUser={currentUser}
                />
            </Suspense>: null
        }

    </>
  )
}

export default CommentReply