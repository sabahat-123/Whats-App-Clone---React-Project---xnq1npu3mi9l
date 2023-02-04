import React from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
      console.log(result.user)
      dispatch(
        {
          type:"SET_USER",
          user:result.user
        }
      )
    }).catch(error=>alert(error))

  }
  return (
    <div className="login__wrapper">
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"/>
        <h2>Sign in to WhatsApp</h2>
        <button onClick={signIn}>Login with Google</button>
    </div>
</div>
  )
}

export default Login

