const Message=(props)=>{
    
    return (
      
      <div >
       <h3>Message: {props.content}</h3>
        <p>Written By: {props.author}</p>
      </div>
  
    )
  }

  export default Message