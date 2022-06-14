import { Component } from 'react';
import './App.css';
import {render} from '@testing-library/react'
import Triggzz from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'PLLILZ', age: '12'},
      {name: 'ANU', age: '22'},
      {name: 'joel', age: '32'},
      {name: 'sekemi', age: '17'},
    ]

  }

  switchNameHandler=()=>{
    this.setState = {
      persons:[
        {name: "Timo", age: 2},
        {name: "Waz", age: 22},
        {name: "SemSem", age: 32},

      ]
    }
  }
  render(){
  return (
    <div className='App'>
      <h1> Bola Ahmed Tinubu. BAT </h1>
      
      <Triggzz name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
      <Triggzz name = {this.state.persons[1].name } age ={this.state.persons[1].age} />
      <Triggzz name = {this.state.persons[2].name } age ={this.state.persons[2].age} />

      <button onClick={this.switchNameHandler}> SWITCH NAME </button>
      
    </div>
  )
  }
}

export default App;
