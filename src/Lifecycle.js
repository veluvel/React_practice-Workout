import React, { Component } from "react";
// import SecondClass from "./SecondClass";
import Willunmount from "./Willunmount";

export class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "Lifecycle",
      show: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevProps, prevState);
    if (prevState.name !== this.state.name) {
      // functionality inga add pannikalam
    }
  }

  updateName = () => {
    this.setState({ name: "Lifecycle Mount Update" }, () => {
      console.log("this.state.name---", this.state.name);
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => this.updateName()}
          // onClick={() => this.setState({ name: "Lifecycle Mount Update" })}
        >
          update
        </button>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          show/hide
        </button>
        {this.state.show ? <Willunmount /> : null}
      </div>
    );
  }
}

export default Lifecycle;
