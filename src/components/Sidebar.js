import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SidebarChat from './SidebarChat';
import { Avatar } from '@material-ui/core';
import { db } from '../firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';


 function Sidebar() {
  const[rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();
  

  useEffect(()=>{
     db.collection("rooms").onSnapshot(snapshot=>{
        setRooms(snapshot.docs.map(docs=>({
          id:docs.id,
          data:docs.data()
        })))
     })
  },[])
  

  
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
        <div className='userIcon'>
        <Avatar src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
        </div> 
         <div className='sidebar_headerRight'>
         <FontAwesomeIcon  icon={faCircleNotch}/>
         <FontAwesomeIcon icon={faMessage} />
         <FontAwesomeIcon icon={faEllipsisVertical} />
         </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text"  placeholder='Search Name' />
            </div>
        </div>
        <div className='sidebar_chat'>
        <SidebarChat addnewchat/>
        {
          rooms.map(room=>{
            return <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
          })
        }
       
        </div>
    </div>
  )
}
export default Sidebar;