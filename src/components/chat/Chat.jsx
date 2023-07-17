import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/services.jpg"

const Chat = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Chat' title='Your Group Chats' cover={img} />
        <div className='container recent'>
          
        </div>
      </section>
    </>
  )
}

export default Chat
