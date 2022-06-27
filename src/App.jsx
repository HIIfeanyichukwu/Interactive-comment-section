import { useState } from 'react'
import styled from 'styled-components'
import './styles/App.css'
import Comment from './components/Comment'
import InputBox from './components/InputBox'
import data from './util/data.json'


const Comments = styled.div`
  div + div {
    margin-block-start: 1rem;
  }
`

function App() {
  const [comments, setComments] = useState(data['comments']);

  let comments_map = Array.from(comments)

  return (
    <div className="App">
      <div className="container">
        <Comments>
          {
            comments_map.map(comment => {
              return <Comment key={comment.id} comment={comment}/>
            })
          }
        </Comments>
        <InputBox/>
      </div>
    </div>
  )
}


export default App
