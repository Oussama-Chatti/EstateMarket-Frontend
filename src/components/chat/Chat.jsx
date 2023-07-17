import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/services.jpg"
import { App as SendbirdApp } from 'sendbird-uikit'
import "sendbird-uikit/dist/index.css";


const Chat = () => {
  
  const APP_ID = "9D33B3C8-0189-4B72-B1AB-A71DA20C6AF2";
  const USER_ID = "oussama.chatti";

  return (
    <>
      <section className='blog-out mb'>
        <Back name='Chat' title='Your Group Chats' cover={img} />
        <div style={{height: "100vh",color:"black"}} className='container recent'>
          <SendbirdApp appId={APP_ID} userId={USER_ID} />
        </div>
      </section>
    </>
  )
}

export default Chat
