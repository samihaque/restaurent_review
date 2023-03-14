

function MyButton(props){

    const handleClick=()=>{
        alert(`Going to -> ${props.text} page`)
        props.onButtonClicked(props.text)
    }

    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}

export default MyButton