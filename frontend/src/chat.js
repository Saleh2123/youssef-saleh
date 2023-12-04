import React, { useState, useEffect } from 'react';
import io, { connect } from 'socket.io-client';
// Replace with your server URL
import { TextField, Container,Button } from '@mui/material';

import { useParams } from 'react-router-dom';
function Chat() {
  // Generate a random hexadecimal number
  const {id}=useParams()


// Display the unique i

  const [messages, setMessages] = useState([]);
 const room=`${useParams().patient}-${useParams().doctor}`
  const [input, setInput] = useState('');
  const socket = io('http://localhost:5000', {
  forceNew: true,
  transports: ['websocket'],
  query: {
    EIO: 4
  }
});

  
const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
   
   
    // Join the default room when the component mounts
    socket.emit('joinRoom', room);

    // Listen for incoming messages
    socket.on('message', (message) => {
        console.log(message)
      setMessages(message);
    });
    socket.on('connect', () => {
    setIsConnected(true)
    });
    socket.on("disconnect",()=>{
      setIsConnected(false)
    })
  }, [room]);

  const sendMessage = (e) => {
   e.preventDefault();
    socket.emit('message', { id:id,room, message: input });
    setInput('');
    
  };
  console.log(messages)

  return (
    <div style={{ padding: '20px',position:'absolute',width:'90%',bottom:0 }}>
     
      <div    style={{bottom:'10vh',overflowY:'scroll',maxHeight:'70vh'}} >
        {messages.map((msg, index) => (
           
          msg.id===id?
          <Container
          
        style={{backgroundColor:'lightblue',display:'flex',marginBlock:'10px',position:'relative',justifyContent:'flex-end',borderRadius:'10px'}}
          >
            
          <p  style={{textAlign:"right"}} key={index}>{msg.message}</p>
          
          
          </Container>
          
          
          
          :
          <Container
          style={{backgroundColor:'lightpink',marginBlock:"10px",display:'flex',position:'relative',borderRadius:'10px'}}
       
          >

          <p key={index}>{msg.message}</p>
          </Container>
        ))}
      </div>
      <div
      style={{position:'sticky',backgroundColor:'white',display:'flex',width:"100%",bottom:0}}
      
      
      >
        <form style={{display:'flex',width:'100%'}}>
      <TextField
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        label="Message"
        fullWidth
        margin="normal"
      />
      <Button type='submit' variant="contained" style={{marginLeft:"10px",marginRight:'15px',aspectRatio:4/1}} color="primary" onClick={sendMessage}>
        Send
      </Button>
      </form>
      {!isConnected && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            socket = io('https://omare-egle.onrender.com', {
              autoConnect: true,
              transports: ['websocket'],
            });

            socket.emit('joinRoom', room);

            socket.on('message', (message) => {
              setMessages((prevMessages) => [...prevMessages, message]);
            });

            socket.on('connect', () => {
              setIsConnected(true);
            });

            socket.on('disconnect', () => {
              setIsConnected(false);
            });
          }}
        >
          Connect
        </Button>
      )}
      </div>
    </div>
  );
}


export default Chat;
