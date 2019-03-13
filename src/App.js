import React, { Component } from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Sketch from './sketch';

class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
			rotation: 150,
			stateSketch: Sketch,
		};
	}

  rotationChange(e){
		this.setState({rotation:e.target.value});
  }

  handleTest(event){
    console.log(event)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wrapper sketch={Sketch} rotation={this.state.rotation} handleCustom={this.handleTest.bind(this)} />
          <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
