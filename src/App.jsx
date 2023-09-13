import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countery'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {
  function handdleClick(){
    alert('btn clicked')
  }
  // function handdleClick2(){
  //   alert('2nd button clicked')
  // }
  const handdleClick2=()=>{
    alert('2nd buttin clicked')
  }
  const addtFive=(num)=>{
    alert(num+5)
  }
  

  return (

    <>
    
      <h1>React core concept 2</h1>
      <Friends></Friends>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handdleClick}>Click me</button>
      <button onClick={handdleClick2}>Click me 2</button>
      <button onClick={()=>{alert('thired btn clicked')}}>thired</button>
       
      <button onClick={()=>addtFive(3)}>four</button>

      <Users></Users>
     
     
    </>
  )
} 

export default App
