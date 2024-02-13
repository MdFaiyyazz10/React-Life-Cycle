import React, { Component } from 'react'

class Mount extends Component {

  constructor(){ // 1
    console.log("Inside Constructor....")
    super();
    this.state = {
      name: "Faiyyazz" 
      // name: this.props.defaultName
    }
  }

  static getDerivedStateFromProps(props , state){ // 2
    console.log("Inside GetDriveStateFromProps");
    console.log("State is " , state);
    console.log("Props are " , props);
    // return {
      // name: "Dilshad" // Props ke basis pe update karna hai to niche hai
      // name: props.defaultName

    // }
    return null;
  }

  
  componentDidMount(){
    console.log("Inside Component Did Mount......")
    // this.setState("MF Sheikh")
  }



  render() {
    console.log("Inside Render....")
    return (
      <h1>I am {this.state.name}</h1>
    )
  }
}



export default Mount