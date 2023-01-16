import React from 'react';
import Calculator from "./Calculator";
import "./App.css"
class App extends React.Component {

  render(){
    return (
      <div className="App">
      <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
