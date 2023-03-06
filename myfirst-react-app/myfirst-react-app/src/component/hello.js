let Hello=(props)=>{
    let message ="hello"
    console.log(message)
    return (
      <div >
        <h3 >{message}</h3>
        <p>This is {props.name} here.....</p>
      </div>
  
    )
  }

  export default Hello