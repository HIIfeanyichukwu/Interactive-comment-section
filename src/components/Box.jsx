import React from 'react'
import styled from 'styled-components'
import userImg from '../images/avatars/image-juliusomo.png'

const IMG = styled.img`
  width: 40px;
  height: 40px;
`

const TextArea = styled.textarea`
  inline-size: 100%;
  resize: none;
  border-radius: 10px;
  height: 7rem;
  padding-block: .5rem;
  padding-inline: 1rem;
  font-size: 1rem;
`

const Box = ({setContent, content, user, purpose}) => {
  const handleInput = (e) => {
    setContent(e.target.value);
  }
  console.log(user)
  return (
    <>
      <IMG src={userImg} alt="user img" />
      <TextArea 
        value={content}
        onChange={handleInput}
        placeholder='Add a comment...' className="comment-section"
        autoFocus
        >
      </TextArea>
    </>
  )
}

export default Box