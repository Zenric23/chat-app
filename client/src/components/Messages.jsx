import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';

const Chat = () => {
  return (
    <div className='border w-100 p-4 d-flex flex-column gap-5 chat-box-section overflow-auto'>
        <div className='w-50'>
            <Card className='p-3 bg-secondary text-white'>
                dasds
            </Card>
            <p className='text-end'>12:23 PM</p>
        </div>
        <div className='w-50 ms-auto'>
            <Card className='p-3 bg-primary text-white'>
                dasds
            </Card>
            <p className='text-end'>12:23 PM</p>
        </div>
    </div>
  )
}

export default Chat