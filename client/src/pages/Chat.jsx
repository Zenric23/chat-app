import React, { useEffect } from 'react'
import Message from '../components/Messages'
import SendMessage from '../components/SendMessage'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Chat = (props) => {
  const { socket, username, setUsername } = props
  
  return (
    <>
        <Header socket={socket} username={username} />
        <div className="d-flex">
            <Sidebar socket={socket} />
            <div className='d-flex align-items-start flex-column w-100'>
                <div className='d-flex align-items-center border-bottom w-100 py-4' style={{height: 60}}>
                    <h6 className='mb-0 ms-3'>Zenric Clarete</h6>
                </div>
                <Message />
                <SendMessage />
            </div>
        </div>
    </>
  )
}

export default Chat