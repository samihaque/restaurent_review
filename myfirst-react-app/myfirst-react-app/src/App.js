// import logo from './logo.svg';
// import './App.css';
// import Hello from './component/hello'
// import Message from './component/message';

// function App() {
//   let name = "sam"
//   let student1 = {firstName:'Ubaydul', lastName: 'Sami' }
//   let student2 = {firstName:'Iffat', lastName: 'Akhi' }
//   let student3 = {firstName:'Huma', lastName: 'Nowrn' }
//   let student4 = {firstName:'Abid', lastName: 'Ashraf' }

//   let messages =[
//     {author:'Sami', content: 'Glad that I can bother you guys'},
//     {author:'Akhi', content: 'Whatever Guys I have to teach a class'},
//     {author:'Nowrn', content: 'I gotta atten my IELTS class'},
//     {author:'Abid', content: 'I have a bussiness to '},
//     {author:'Sami', content: 'Ei silo toder money!! '},
//   ]

//   const renderMessages=()=>{
//     return messages.map((value, index) => {
//       // do stuff for each ite in the array
//       return <Message author={value.author} content = {value.content} />
//     })
//   }

//   // return JSX
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>Adding a Header to my app!😮‍💨</h1>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           yoo!! I'm excided to hack in react.
//         </p>
//         <div>
//           <Hello name= {student1}/>
//           <Hello name= {student2}/>
//           <Hello name= {student3}/>
//           <Hello name= {student4}/>
//         </div>
//         {/* <div>
//           <Message author = {'Sami'} content = {'Glad that I can bother you guys'}/>
//         </div> */}
//         {renderMessages()}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }



// export default App;
import { useState } from "react";
import MyButton from "./component/MyButton";
import './App.css';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Welcome from "./component/Welcome";

function App(){

  const [buttonClicked, setButtonClicked] = useState(null)

  const notifyClickStatus=(text)=>{
    console.log('Something got clicked')
    console.log('what got clicked: ', text)

    setButtonClicked(text)
  }

  const renderPage=()=>{
    console.log('in renderPage')
      if (buttonClicked === 'Login!'){
        return <Login />
      }
      else if (buttonClicked === 'Sign Up!'){
        return <SignUp />
      }
        
      else{
        return (<div>
          <h1>What's up</h1>
          <p>Click below to get started</p>
          <MyButton text={"Login!"} onButtonClicked = {notifyClickStatus}/>

          <p>Or sign up for an account</p>
          <MyButton text={"Sign Up!"} onButtonClicked = {notifyClickStatus}/>
        </div>
        )
      }
    
  }

  // should return some jsx
  return(
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App