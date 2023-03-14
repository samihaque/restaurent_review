// turn this in default sign up form
import { useState } from "react"

const SignUp =()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleFirstNameChange=(event)=>{
        console.log(event)
        setFirstName(event.target.value)
    }
    const handleLastNameChange=(event)=>{
        console.log(event)
        setLastName(event.target.value)
    }
    const handleEmailChange=(event)=>{
        console.log(event)
        setEmail(event.target.value)
    }
    const handleSubmit=(event)=>{
        alert(`Thanks for submitting ${firstName} ${lastName} !`)
        console.log(firstName, lastName, email)
    }

    return(
            <form className="signUp" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" id = "fname" name="fname" onChange={handleFirstNameChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" id ="lname" name="lname" onChange={handleLastNameChange}/>
                </label>
                <label>
                    Email:
                    <input type="text" id = "email" name="email" onChange={handleEmailChange}/>
                </label>
                <input type="submit" value="Let's go"/>
            </form>
    )
}

export default SignUp
