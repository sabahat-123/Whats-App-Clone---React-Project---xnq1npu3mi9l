import React from 'react'
import { Avatar } from '@material-ui/core'
import { useState ,useEffect } from 'react'

function SidebarChat({ addnewchat}) {
    const [seed, setSeed] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])
  return (
    !addnewchat ? (
        <div className='contactList'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='contactList_info'>
        <h2>khushnudi</h2>
        <p>Hello...</p>
        </div>
      </div>
    ):(
      <div className='contactList'>
        <h2>Add New Chat</h2>
      </div>
    )
    
  )
}

export default SidebarChat
