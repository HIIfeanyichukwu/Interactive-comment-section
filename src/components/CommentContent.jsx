import React from 'react'
import styled from 'styled-components'
import CommentHeader from './CommentHeader'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    order: 1;
`

const CommentContent = () => {
  return (
    <Main>
        <CommentHeader/>
        <main className="comment-main">
            Impressive! Though it seems the drag feature could be imporved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well
        </main>
    </Main>
  )
}

export default CommentContent