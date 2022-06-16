import { Component } from 'react';
import './App.css';
import Triggzz from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Phillz', age: 12},
      {name: 'ANU', age: 22},
      {name: 'Joel', age: 32}
      
    ]

  }

  switchNameHandler=()=>{
    this.setState = {
      persons:[
        {name: "Timo", age: 2},
        {name: "Waz", age: 22},
        {name: "Seyi", age: 32}

      ]
    }
  }
  render(){
  return (
    <div className='App'>
      <h1> Bola Ahmed Tinubu. BAT </h1>
      
      <Triggzz name = {this.state.persons[0].name} age  ={this.state.persons[0].age} />
      <Triggzz name = {this.state.persons[1].name } age ={this.state.persons[1].age} />
      <Triggzz name = {this.state.persons[2].name } age ={this.state.persons[2].age} />

      <button onClick={this.switchNameHandler}> SWITCH NAME </button>
      
    </div>
  )
  }
}

export default App;
