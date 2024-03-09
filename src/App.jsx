import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Student from './Student';

function App() {

  // const actors = ['Sakib', 'Lima', 'Tuli', 'Shampa']

  // const stuObj = [
  //   { name: 'Mir Sakhawat', age: 30 },
  //   { name: 'Nila', age: 33 },
  //   { name: 'Shampa', age: 32 },
  //   { name: 'Shormi', age: 43 },
  //   { name: 'Moni', age: 43 },
  // ]


  return (
    <>

      <h1>Vite + React</h1>








      {/* <Student></Student> */}
      {/* {
        stuObj.map(studentSingle => <Student studentInfo={studentSingle}></Student>)
      } */}


      {/* <Actor name="sarukh Khan"></Actor>
      <Actor name={"sarukh Khan"}></Actor> */}

      {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Learn vue' isDone={false}></Todo>
      <Todo task='Learn Js' isDone={true}></Todo> */}

      {/* <Person name='mobile' age="90"></Person>
      <Person name='laptop' age="19"></Person>
      <Person name='watch' tension="yes"></Person> */}

    </>
  )
}



// function Person({ name, age, tension }) {
//   return (
//     <div>
//       <h3>This is : {name} and age is {age} {tension}</h3>
//     </div>
//   )
// }









export default App
