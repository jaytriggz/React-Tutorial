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

  

  render(){

    

  return (

    <div>
    <Home name={this.state.my_length} change={(e)=>this.check(e)} /> 
    </div>

  
  );
}

}

export default App;