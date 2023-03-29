import Message from './message'


const Dashboard=()=>{
    return(
        <div>
            <h1>This is my Dashboard</h1>
            <p>Here is our messages</p>
            <div><Message content = "Testing Message" author = "cam"/></div>
        </div>
    )
}

export default Dashboard