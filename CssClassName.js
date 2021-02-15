import React from 'react';

class Button extends React.Component {
	constructor(props){
	  super(props)
	  this.state ={
		button: true
	  }
	  this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
	  this.setState({
		button:!this.state.button
	  })
	}
	render(){
	  return (
	  <div className="container">
		<h1>Click to change button colour.</h1>
		<button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> Click</button>  
	  </div>
	  )
	}
	
}

export default Button; 