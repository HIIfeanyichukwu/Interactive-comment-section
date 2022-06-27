import React, { lazy } from 'react'
import styled from 'styled-components'
import Score from './Score'
import CommentContent from './CommentContent'
import Replies from './Replies'

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

const Comment = ({comment, currentUser}) => {
  return (
    <CommentMain >

        <CommentComponent className='comment-component'>
            <Score score={comment.score}/>
            <CommentContent 
                comment={comment} 
                currentUser={currentUser}
            />
        </CommentComponent>

        {
            (comment.replies != undefined) ?

            <Replies>
                {
                    comment.replies.map(reply => {

                      return (

                        <CommentComponent 
                        className='comment-component'
                        key={reply.id}>
                            <Score score={reply.score}/>
                            <CommentContent 
                                comment={reply}
                                currentUser={currentUser}
                            />
                        </CommentComponent>
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