import { useState } from 'react'
import './styles/App.css'
import Comment from './components/Comment'
import InputBox from './components/InputBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Comment/>
        <InputBox/>
      </div>
    </div>
  )
}

export default App
