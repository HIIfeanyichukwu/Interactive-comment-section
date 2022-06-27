import React from 'react'
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

const ReplyBox = () => {
  return (
    <Div>
        <Box />
        <Btn>
            REPLY
        </Btn>
    </Div>
  )
}

export default ReplyBox