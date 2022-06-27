import React from 'react'
import styled from 'styled-components'
import user from '../images/avatars/image-juliusomo.png'

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

const Box = (props) => {
  return (
    <>
      <IMG src={user} alt="user img" />
      <TextArea placeholder='Add a comment...' className="comment-section">
      </TextArea>
    </>
  )
}

export default Box