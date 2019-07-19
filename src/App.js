import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav'
import data from './data'
import Buttons from './Components/Buttons'
import Container from './Components/Container'

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: data,
      index: 0
    }
  }
  next = () => {
    if(this.state.index < this.state.data.length -1){
      this.setState({
        index: this.state.index + 1
      })
    } else {
      this.setState({
        index: 0
      })
    }
  };
  previous = () => {
    if(this.state.index > 0){
      this.setState({
        index: this.state.index -1
      })
    } else {
      this.setState({
        index: this.state.data.length - 1
      })
    }
  };

  render(){
    return (
      <div className ="App">
        <Nav />
        <Container person={this.state.data[this.state.index]} />
        <Buttons next={this.next} previous={this.previous} />
      </div>
    )
  }

}

export default App;
