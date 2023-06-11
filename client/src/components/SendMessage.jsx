import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const SendMessage = () => {
  return (
    <Row className="border-top w-100" style={{height: 92}}>
        <Col xs={11}><textarea type="text" className="w-100 h-100 p-2" placeholder='Type here...' /></Col>
        <Col className='d-flex align-items-center p-0'><Button size="lg" className='mx-auto'>SEND</Button></Col>
    </Row>
  )
}

export default SendMessage