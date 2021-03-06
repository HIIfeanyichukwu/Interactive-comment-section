import React from 'react'
import styled from 'styled-components'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
    .user {
        color: #fff;
        background-color: hsl(238, 40%, 52%);
        padding: .1rem .5rem;
        border-radius: 4px;
        font-weight: 500;
    }
    .date {
        color: hsl(211, 10%, 45%);
        font-size: .9rem;

        @media (min-width: 740px)
        {
            font-size: 1rem;
        }
    }

`

const Avatar = ({user, createdAt, currentUser}) => {
    let currentuser;
    if (user.username == currentUser.username) {
        currentuser = <span className="user">you</span>
    }
  return (
    <User>
        <img src={user["image"].webp} alt="user image" className="avatar" />
        <span className="user-name">{user.username}</span>
        {currentuser}
        <span className="date">
            {
                isNaN(createdAt) ? createdAt: formatDistanceToNow(createdAt, {
                    includeSeconds: true,
                }).replace('less than', '') + ' ago'
            } 
        </span>
    </User>
  )
}

export default Avatar