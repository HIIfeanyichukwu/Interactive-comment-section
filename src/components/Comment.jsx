import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'
import Score from './Score'
import CommentContent from './CommentContent'
import Replies from './Replies'
import CommentReply from './CommentReply'


const CommentMain = styled.div`
    & + & {
        margin-block-start: 1rem;
    }
`

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

const Comment = ({comments, comment, currentUser, setComments}) => {
    const [replyToggle, setReplyToggle] = useState(false)

    let ReplyBox = lazy(() => import('./ReplyBox'))

  return (
    <CommentMain >

        <CommentComponent className='comment-component'>
            <Score score={comment.score}/>
            <CommentContent 
                comment={comment}
                comments={comments}
                setComments={setComments} 
                currentUser={currentUser}
                commentId={comment.id}
                setReplyToggle={setReplyToggle}
            />
        </CommentComponent>

        {
            (replyToggle) ?
            <Suspense>
                <ReplyBox
                    setReplyToggle={setReplyToggle}
                />
            </Suspense>: null
        }

        {
            (comment.replies != undefined) ?

            <Replies>
                {
                    comment.replies.map(reply => {

                      return (

                        <CommentReply
                            reply={reply}
                            currentUser={currentUser}
                            commentId={comment.id}
                            comments={comments}
                            setComments={setComments}
                            key={reply.id}
                        />

                      )
                    })
                }
               
            </Replies>
            : null
        }

    </CommentMain>
  )
}

export default Comment