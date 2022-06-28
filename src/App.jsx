import { useState } from 'react'
import './styles/App.css'
import Comment from './components/Comment'
import InputBox from './components/InputBox'
import data from './util/data.json'
import Delete from './components/Delete'



function App() {
  const [comments, setComments] = useState(data['comments']);
  const [currentUser, setCurrentUser] = useState(data.currentUser)




  let comments_map = Array.from(comments)

  return (
    <div className="App">
      <Delete />
      <div className="container">
        <div className='comments'>
          {
            comments_map.map(comment => {
              return (

                <Comment 
                  key={comment.id} 
                  comment={comment}
                  comments={comments}
                  setComments={setComments}
                  currentUser={currentUser}
                />
              ) 
            })
          }
        </div>
        <InputBox
          comments={comments}
          currentUser={currentUser}
          setComments={setComments}
        />
      </div>
    </div>
  )
}


export default App
