import React from 'react'
import { Avatar } from '@material-ui/core'
import { useState ,useEffect } from 'react'
import { db } from '../firebase';
import { Link } from 'react-router-dom';
 

function SidebarChat({id,name,addnewchat}) {

  const [seed, setSeed] = useState("");

  useEffect(()=>{
      setSeed(Math.floor(Math.random() * 5000));
   
  },[])
  const createChat=()=>{
    const room = prompt("Please enter room name.");
   if(room)
        {
             db.collection("rooms").add({
             name:room
       })
   }
}
  return (
      !addnewchat ? (
    <Link to={`/room/${id}`}>
     <div className="contactList">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="contactList_info">
          <h2>{name}</h2>
          <p>hello</p>
      </div>
      </div> 
    </Link>
        
      ) :(
      <div className="contactList" onClick={createChat}>
          <h2>Add New Chat</h2>
      </div>
  )
  )
}

export default SidebarChat
