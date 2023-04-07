import Message from './message'

import Form from './form'
import MessageList from './MessageList'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard=()=>{
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const savedMessages = JSON.parse(localStorage.getItem("messages"))
        if(savedMessages){
            console.log('loaded messages', savedMessages)
            setMessages(savedMessages)
        }
    }, [])

    let newMessageNotification = (newMessage)=>{
        // let addedMessages = messages
        // addedMessages.push(newMessage)
        // console.log(addedMessages)
        // setMessages(addedMessages)
        setMessages([...messages, newMessage])

        // save items locally
        localStorage.setItem("messages", JSON.stringify([...messages, newMessage]))
        console.log('Saved to Local Storage', [...messages, newMessage])
    }
    return(
        <div>
            <h1>This is my Dashboard</h1>
            <Form onNewMessage={newMessageNotification}/>
            <p>Here is our messages</p>
            {/* <div><Message content = "Testing Message" author = "cam"/></div> */}
            <MessageList messageData={messages}/>
        </div>
    )
}

export default Dashboard