import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SidebarChat from './SidebarChat';
import { Avatar } from '@material-ui/core';




 function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
        <div className='userIcon'>
        {/* <FontAwesomeIcon  icon={faUserCircle}/>  */}
        <Avatar src={`https://api.dicebear.com/5.x/adventurer/svg?seed=Ginger`}/>
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
            <input type="text" placeholder='Search Name'/>
            </div>
        </div>
        <div className='sidebar_chat'>
           <SidebarChat addnewchat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/> 
        </div>
    </div>
  )
}
export default Sidebar;