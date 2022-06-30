import { Component } from 'react';
import Home from './Home';





class App extends Component {

  state = {
    my_length: ''
  }

  check = (e)=>{
    if (e.target.value.length < 5){
      this.setState({ 
        my_length: `The total Character ${e.target.value.length}  is too short`
      })
    }
    else{
      this.setState({
        my_length: e.target.value.length + ' long enough'
      })
    }
  }

<<<<<<< HEAD
  
=======
   npm 
>>>>>>> a29e5fa65cdf750303306bb18aa00cffd48e3eb4

  render(){

    

  return (
<<<<<<< HEAD
=======
    <div className="App">
        <h1>Hello citizens of Nigeria  ! Get Your Freaking PVC</h1>
        <button onClick={this.showPersonHandler}> Switch </button>
        {people}
        
     
>>>>>>> a29e5fa65cdf750303306bb18aa00cffd48e3eb4

    <div>
    <Home name={this.state.my_length} change={(e)=>this.check(e)} /> 
    </div>

  
  );
}

}

export default App;