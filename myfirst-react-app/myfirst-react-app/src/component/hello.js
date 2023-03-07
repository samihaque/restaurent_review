let Hello=(props)=>{
    let message ="hello"
    let firstName = props.name.firstName
    let lastName = props.name.lastName
    console.log(message)
    return (
      
      <div >
       
        <p>{message} This is {firstName} {lastName} here.....</p>
      </div>
  
    )
  }

  export default Hello