import React from 'react'
import styled from 'styled-components'

const DeleteComponent = styled.div`
    .del-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
        backdrop-filter: blur(2px);
        z-index: 10;
        padding-inline: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 740px) {
            padding-inline: 0;
        }
    }

    .main {
        padding: 1.2rem;
        background-color: #fff;
        border-radius: 8px;
        max-inline-size: 350px;

        .del-header {
            font-size: 1.2rem;
            margin-block-end: 1rem;
            color: hsl(212, 24%, 26%);
        }

        .del-content {
            font-size: 1rem;
            line-height: 1.5;
            margin-block-end: 1rem;
            color: hsl(211, 10%, 45%);
        }

        .btns {
            display: flex;
            justify-content: space-between;
        }
    }
`

const Btn = styled.button`
    color: #fff;
    border: none;
    padding: .8rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;

    &.red {
        background-color: hsl(358, 79%, 66%);
        :hover {
            background-color: hsl(357, 100%, 86%);
        }
    }
    &.grey {
        background-color: hsl(211, 10%, 45%);
        :hover {
            background-color: #bdbfc4;
        }
    }
`

const Delete = ({setComments, setDel}) => {
  return (
    <DeleteComponent>
        <div className="del-backdrop">
            <main className='main'>
                <h1 className="del-header">
                    Delete comment
                </h1>
                <p className="del-content">
                    Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                </p>
                <div className="btns">
                    <Btn className='grey'>
                        NO, CANCEL
                    </Btn>
                    <Btn className='red'>
                        YES, DELETE
                    </Btn>
                </div>
            </main>
        </div>
    </DeleteComponent>
  )
}

export default Delete