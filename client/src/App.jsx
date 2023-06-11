import { useEffect, useState } from 'react'
import Home from '@pages/Home'
import Chat from '@pages/Chat'
import { io } from "socket.io-client";
import {
  Routes,
  Route
} from 'react-router-dom'

// const socket = io.connect('http://localhost:3000')

function App() {
  const[socket, setSocket] = useState(null)
  const[username, setUsername] = useState('')
  // const[room, setRoom] = useState('')

 
  useEffect(()=> {
    setSocket(io('http://localhost:3000'))
  }, [])

  return (  
    <Routes> 
      <Route 
        path='/chat'
        element={<Chat socket={socket} username={username} setUsername={setUsername} />}
      />
      <Route 
        path='/'
        element={<Home socket={socket} setUsername={setUsername} />}
      />
    </Routes>
  )
}

export default App
