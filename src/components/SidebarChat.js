import React from 'react'
import { Avatar } from '@material-ui/core'
import { useState ,useEffect } from 'react'
 
const SidebarChat=(props)=>{
      const [seed, setSeed] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])
      const {userData} = props;
        return (
          <div className='contactList'>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className='contactList_info'>
          <h2>{userData.name}</h2>
          <p>{userData.lastText}</p>
          </div>
          {/* <div className='timeSpan'>
            <span className='lastSeen'>{userData.lastTextTime}</span>
          </div> */}
        </div>
        );

};

export default SidebarChat
