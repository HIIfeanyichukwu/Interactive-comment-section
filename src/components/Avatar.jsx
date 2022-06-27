import React from 'react'
import styled from 'styled-components'

const User = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
    }
    .user-name {
        color: hsl(212, 24%, 26%);
        font-weight: 500;
    }
    .date {
        color: hsl(211, 10%, 45%);
    }

`

const Avatar = ({user, createdAt}) => {
  return (
    <User>
        <img src={user["image"].webp} alt="user image" className="avatar" />
        <span className="user-name">{user.username}</span>
        <span className="date">{createdAt}</span>
    </User>
  )
}

export default Avatar