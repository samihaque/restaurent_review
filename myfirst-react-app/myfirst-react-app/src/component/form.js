import { useState } from "react"

const Form =(props)=>{
    
    const [message, setMessage] = useState("")
    
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            alert(message)
            props.onNewMessage(message);
        }}>
            <label>New Message: </label>
            <input type="text"
            name="newMessage"
            onChange={(event)=>{
                console.log(event.target.value)
                setMessage(event.target.value)
            }}/>
            
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form