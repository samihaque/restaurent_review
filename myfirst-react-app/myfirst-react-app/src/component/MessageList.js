import Message from "./message"

const MessageList = (props)=>{
    console.log(props.messageData)
    return (
        
        <div>
            {
                props.messageData.map((value, index)=>{
                    return <Message key={index} content={value} author={"sam"}/>
                })
            }

        </div>
    )
}

export default MessageList