import React, { lazy } from 'react'
import styled from 'styled-components'
import Score from './Score'
import CommentContent from './CommentContent'
import Replies from './Replies'

const Comments = styled.div`
    div + div {
        margin-block-start: .5rem;
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

    @media (min-width: 740px) {
        flex-direction: row;
    }
`

const Comment = ({comment}) => {
  return (
    <Comments >

        <CommentComponent>
            <Score score={comment.score}/>
            <CommentContent comment={comment}/>
        </CommentComponent>

        {
            (comment.replies != undefined) ?

            <Replies>
                {
                    comment.replies.map(reply => {

                      return (

                        <CommentComponent key={reply.id}>
                            <Score score={reply.score}/>
                            <CommentContent comment={reply}/>
                        </CommentComponent>
                      )
                    })
                }
               
            </Replies>
            : null
        }

    </Comments>
  )
}

export default Comment