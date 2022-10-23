import React,{Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component{

  state = {
    persons : [
      {name:'Max' , age:28 },
      {name:'Manu', age: 29},
      {name:'Stephaine',age:26}
    ],
    otherState:'some other value',
  }
  switchNameHandler = () =>{
    console.log('Was Clicked');
    this.setState({persons:[
      {name:'Max' , age:21 },
      {name:'Manu', age: 22},
      {name:'Stephaine',age:23}
    ]
    })
  }
  render(){
  return (
    <div className="App">
      <h1> REACT APP </h1>
      <p> This is really working!</p>
      <button onClick={this.switchNameHandler}>Click me</button>
      <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person/>
    </div>
  );
}
}

export default App;
