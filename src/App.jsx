import { useState } from 'react'
import './styles/App.css'
import Comment from './components/Comment'
import InputBox from './components/InputBox'
import Data from './util/retrieveComments'



const sortFunc = (a, b) => b.score - a.score;

function App() {
  const [comments, setComments] = useState(Data()['comments'].sort(sortFunc));
  const [currentUser, setCurrentUser] = useState(Data().currentUser)



  let comments_map = Array.from(comments)

  return (
    <div className="App">
      <div className="container">
        <div className='comments'>
          {
            comments_map.map(comment => {
              return (

                <Comment 
                  key={comment.id + comment.user.username} 
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
