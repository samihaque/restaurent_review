

function MyButton(props){

    const handleClick=()=>{
        alert('Clicked!')
        props.onButtonClicked(props.text)
    }

    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}

export default MyButton