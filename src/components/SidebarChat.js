import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import { Avatar } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'


function SidebarChat({addnewchat}) {
    const [seed, setSeed] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])
  return (
    !addnewchat ? (
        <div className='contactList'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='contactList_info'>
        <h2>Khushnudi</h2>
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
