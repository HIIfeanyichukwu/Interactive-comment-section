import React from 'react'
import styled from 'styled-components'


const Options = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 1.5rem;
    right: .8rem;
    align-items: center;
    margin-block-start: 0;

    @media (min-width: 740px) {
        position: static;
    }
`

const Btn = styled.button`
    display: flex;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.1rem;
    gap: 8px;
    cursor: pointer;

    &.red {
        color: hsl(358, 79%, 66%);

        :hover {
            color: hsl(357, 100%, 86%);

            path {
                fill: hsl(357, 100%, 86%);
            }
        }
    }
    &.blue {
        color: hsl(238, 40%, 52%);
        :hover {
            color: hsl(239, 57%, 85%);

            path {
                fill: hsl(239, 57%, 85%);
            }
        }
    }
`

const UserOptions = ({setDel, setEdit}) => {

    const handleEdit = (e) => {

    }
  return (
    <Options>
        <Btn 
            className='red'
            onClick={(e) => {
                e.preventDefault()
                setDel(true)
            }}
        >
            <span className="icon">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
            </span>
            Delete
        </Btn>
        <Btn 
            className='blue'
            onClick={(e) => {
                e.preventDefault()
                setEdit(true)
            }}
        >
            <span className="icon">
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
            </span>
            Edit
        </Btn>
    </Options>
  )
}

export default UserOptions