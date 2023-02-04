import { Avatar } from '@material-ui/core'
import React, { useEffect ,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat';
import { db } from '../firebase';
import { useStateValue } from './StateProvider';



function Chat() {
  const {roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [input, setInput] = useState("");
  const [messages , setMessages] = useState([]);
  const [{user} , dispatch] = useStateValue();
  useEffect(()=>{
    if(roomId){
      db.collection("rooms").doc(roomId).onSnapshot(snapshot=> {
        setRoomName(snapshot.data().name);
      })
    }
   db.collection("rooms").doc(roomId).collection("message").
      orderBy("timestamp","asc").onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[roomId])
 

  const sendMessage=(e)=>{
    e.preventDefault();
    if(input==="")
    {
        return alert("Please enter your message")
    }
    
    db.collection("rooms").doc(roomId).collection("message").add({
        name:user.displayName,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
 }
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/123.svg`}/>
        <div className="chat__headerInfo">
         <h3>{roomName}</h3>
         <p>Last seen...</p>               
        </div>
        <div className="header__right">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faPaperclip}/>
        <FontAwesomeIcon icon={faEllipsisVertical} />           
        </div>

      </div>
      <div className='chat_body'>
        {
          messages.map(message=>(
            <p className={`chat_message ${user.displayName==message.name && "chat_reciver"}`}>
           <span className='chat_name'>{message.name}</span>
           {message.message}
           <span className='chat_time'>
           {
            new Date(message.timestamp?.seconds*1000).toLocaleTimeString()
          }
           </span>
        </p>
          ))
        }
      </div>
      <div className='chat_footer'>
        <FontAwesomeIcon icon={faFaceSmile}/>
        <FontAwesomeIcon icon={faPaperclip}/>
        <form onSubmit={sendMessage}>
            <input type="text" value={input} placeholder="Type your message" onChange={e=>setInput(e.target.value)}/>
            <input type="submit"/>
        </form>
        <FontAwesomeIcon icon={faMicrophone}/>
      </div>
    </div>
  )
}

export default Chat
