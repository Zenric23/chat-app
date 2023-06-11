const express = require('express')
const app = express()
const {Server} = require('socket.io')

const server = require('http').createServer(app);
    
const io = new Server(server,{ 
  cors: {
    origin: 'http://localhost:5173',
    // methods: ['GET', 'POST']
  }
}) 

  let Users = []

  const joinChat = (details) => {
    Users.push(details)
    console.log(Users)
  }

  const leaveChat = (socket_id) => {
    const usersLeft = Users.filter(user=> user.socket_id !== socket_id)
    Users = usersLeft
  } 

  const getUserDetails = (socket_id) => {
    const userDetails = Users.find(user=> user.socket_id === socket_id)
    return userDetails
  } 
  
  const getUsers = (socket_id) => {
    return Users.filter(user=> user.socket_id !== socket_id)
  }
 
  
  io.on('connection', function(socket) { 
    console.log('Client connected:', socket.id);

    socket.on('join', (userDetails)=> {
      joinChat(userDetails) 
      io.emit('getUser', userDetails)
    })  
     
    socket.on('leave', ()=> {    
      leaveChat(socket.id) 
      console.log(Users)   
    })   
     
    socket.on('disconnect', () => {   
      console.log('Client disconnected');
      leaveChat(socket.id)
    }); 
  })  
   

  server.listen(3000, function() {
    console.log('App listening PORT:', 3000 )
  }); 
 