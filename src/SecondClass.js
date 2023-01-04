import React, { Component } from 'react'
// import FirstClass from './FirstClass';


export class SecondClass extends Component {
  render() {
    // console.log("sec",this);
    return (
      <div>
        <h2>Multiple class component</h2>
        <p>Multiple class component-i render pandrathu ipadi pannikalam</p>
        <p>Intha file-i entha parent ku anupuromo antha intha child file-i parent ku tag mathiri pass pannanum</p>
        <h4>{this.props.val}</h4>

        {/* child la irunthu parent ku this.props moolama values pass pannikalam */}
        <button onClick={()=>this.props.getData("I'm velmurugan")}>click</button>
        
      </div>
    )
  }
}

export default SecondClass;