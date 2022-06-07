
import './App.css';
import {render} from '@testing-library/react'
import Triggzz from './Person/Person'

function App() {
  return (
    <div className='App'>
      <h1> Bola Ahmed Tinubu</h1>
      <Triggzz name ="Morayo"/> <Triggzz name="Anu"/> <Triggzz name="Nonny"/>
    </div>
  )
}

export default App;
