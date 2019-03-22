import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  componentDidMount(){
    
    fetch('https://reqres.in/api/users?page=2')
    .then( res => {
      console.log('res',res)
    })
    .catch( () => {
      
    })


  }

  render() {

    const { userData={}} = this.state;

    return (
      <div className="App">
        <div className="App-header">
           <p>asdfasdfsa</p>
         
        </div>
      </div>
    );
  }
}

export default App;
