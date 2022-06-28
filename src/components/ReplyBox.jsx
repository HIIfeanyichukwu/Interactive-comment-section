import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '../components/Box'

const Div = styled.div`
    display: flex;
    padding-inline: .8rem;
    padding-block: 1rem;
    gap: 1rem;
    background-color: #fff;
    border-radius: 8px;
    padding-block-end: 5rem;
    position: relative;
    margin-block: 1rem;

    img,button {
        position: absolute;
        bottom: 1rem;
    }
    img {
        left: .8rem;
    }
    button {
        right: .8rem;
    }

    @media (min-width: 740px) {
        img,button {
            position: static;
        }
        padding-block-end: 1rem;
    }
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

   


    :hover {
        background-color: hsl(239, 57%, 85%);
    }
`

const ReplyBox = ({setReplyToggle, user, commentId, setComments, comments, currentUser}) => {
    const [content, setContent] = useState('')
    const handleReply = (e) => {
        e.preventDefault()
        if (!content) {
            setReplyToggle(false)
            return;
        }


        let comment = comments.filter(comment => {
            if (comment.id == commentId) return comment;
        })
        comment = comment[0]
        let id; 
        (comment.replies.length > 0)? id= comment.replies[comment.replies.length - 1].id + 1 : 1;

        
        let reply = [{
            content,
            createdAt: Date.now(),
            id: id,
            replyingTo: user.username,
            score: 0,
            user: currentUser
        }]


        let comments_map = Array.from(comments);
        comments_map.map(comment => {
            if (comment.id == commentId) {
                let replies = Array.from(comment.replies);
                let new_ = replies.concat(reply)
                comment.replies = new_
            }
        })

        setComments(comments_map)
        setReplyToggle(false);
    }
  return (
    <Div>
        <Box 
            content={content}
            setContent={setContent}
            user={user}
            purpose="reply"
        />
        <Btn
            onClick={handleReply}
        >
            REPLY
        </Btn>
    </Div>
  )
}

export default ReplyBox