import React from 'react'
import styled from 'styled-components'

const ScoreComponent = styled.div`
  display: flex;
  align-items: center;
  padding-block: .5rem;
  background-color: hsl(223, 19%, 93%);
  inline-size: 6rem;
  border-radius: 8px;
  cursor: pointer;
  justify-content: space-between;
  order: 2;


  .score {
    font-weight: 700;
    font-size: 1.1rem;
    color: hsl(238, 40%, 52%);
  }

  .plus,.minus{
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .plus:hover,.minus:hover {
    .icon {
      fill: hsl(238, 40%, 52%);
    }
  }

  @media (min-width: 740px) {
    flex-direction: column;
    order: 1;
    width: 40px;
    height: 100px;
    /* inline-size: initial; */
  }
  
`

const Score = ({score, setComments, comment, commentId, isreply, comments, currentUser}) => {

  const upVote = (e) => {
    e.preventDefault()
    let comments_map;
    comments_map = Array.from(comments)
    comments_map = comments_map.map(comment => {
      return Object.assign(comment)
    }) 
    if (isreply) {
      comments_map = comments_map.map(commentItem => {
        if(!(commentId == commentItem.id)) {
          return commentItem
        }
        let replies = Array.from(commentItem.replies)
        replies = replies.map(reply => Object.assign(reply))
        replies = replies.map(reply => {
          if (!(reply.id == comment.id)) return reply;
          reply.score += 1;
          return reply
        })
        commentItem.replies = replies;
        return commentItem
      })
    }

    comments_map = comments_map.map(commentItem => {
      if (!(commentId == commentItem.id)) return commentItem;
      commentItem.score += 1;
      return commentItem
    })

    

    let data = {
      currentUser: currentUser,
      comments: comments_map, 
    }

    localStorage.setItem('comments', JSON.stringify(data))
    setComments(comments_map)
    return;
  }

  const downVote = (e) => {
    e.preventDefault()
    let comments_map;
    comments_map = Array.from(comments)
    comments_map = comments_map.map(comment => {
      return Object.assign(comment)
    }) 
    if (isreply) {
      comments_map = comments_map.map(commentItem => {
        if(!(commentId == commentItem.id)) {
          return commentItem
        }
        let replies = Array.from(commentItem.replies)
        replies = replies.map(reply => Object.assign(reply))
        replies = replies.map(reply => {
          if (!(reply.id == comment.id)) return reply;
          reply.score -= 1;
          if (reply.score < 0) reply.score = 0;
          return reply
        })
        commentItem.replies = replies;
        return commentItem
      })
    }
    comments_map = comments_map.map(commentItem => {
      if (!(commentId == commentItem.id)) return commentItem;
      commentItem.score -= 1;
      if (commentItem.score < 0) commentItem.score = 0;
      return commentItem
    })

    let data = {
      currentUser: currentUser,
      comments: comments_map, 
    }
    localStorage.setItem('comments', JSON.stringify(data))
    setComments(comments_map)
    return;
  }

  return (
  <ScoreComponent>
    <button
      onClick={upVote}
      className="plus"
    >
      <svg className='svg-icon' width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path className='icon' d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
    </button>
    <span className="score">{score}</span>
    <button 
      onClick={downVote}
      className="minus"
    >
      <svg className='svg-icon' width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path className='icon' d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>
    </button>
  </ScoreComponent>
  )
}

export default Score