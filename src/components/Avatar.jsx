import React from 'react'
import styled from 'styled-components'
import amy from '../images/avatars/image-amyrobson.png'

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

const Avatar = ({username, date}) => {
  return (
    <User>
        <img src={amy} alt="" className="avatar" />
        <span className="user-name">amyrobson</span>
        <span className="date">1 month ago</span>
    </User>
  )
}

export default Avatar