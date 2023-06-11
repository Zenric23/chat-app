import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { joinValidation } from "../utils/FormValidation";
import { v4 as uuid4 } from 'uuid'

const Home = (props) => {
  const {socket, setUsername} = props

  const navigate = useNavigate();

  const {
    handleSubmit,
    handleChange,
    error,
    value
  } = useForm(handleJoin, joinValidation)

  function handleJoin(){
    const userDetails = {id: uuid4(), socket_id: socket.id, username: value.username}
    socket.emit('join', userDetails)
    setUsername(userDetails.username)
    navigate('/chat')
  }
  
  return (
    <>
      <Col md={4} className="mt-5 mx-auto">
        <Card className="p-4">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className={`${error.username && 'input-err'}`}
                name="username"
                required
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                value={value.username || ''}
              />
              {
                error.username &&  <p className="input-err-text">{error.username}</p>
              }
            </Form.Group>
            <Button type="submit">Join</Button>
          </Form>
        </Card>
      </Col>
    </>
  );
};

export default Home;
