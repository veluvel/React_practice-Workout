import React, { Component } from "react";

let interval;
export class Willunmount extends Component {
    componentDidMount(){
    interval = setInterval(()=>{
            console.log("setinterval kuduthuruken");
        },2000)
    }

    componentWillUnmount() {
    console.log("Secondclass componentwillUnmount");
    clearInterval(interval);
}

  render() {
    return <div>willunmount aagurathuku munnadi</div>;
  }
}

export default Willunmount;
