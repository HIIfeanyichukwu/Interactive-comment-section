import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-block-start: 1rem;
  border-inline-start: 2px solid hsl(239, 57%, 85%);
  padding-inline-start: 1rem;
  
  @media (min-width: 740px) {
    margin-inline-start: 1rem;
  }

`

const Replies = (props) => {
  return (
    <Div>
      {props.children}
    </Div>
  )
}

export default Replies