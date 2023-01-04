import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "@testing-library/react";
import Export from "./Export.js"
import FirstClass from "./FirstClass";
// class Demo{
//   methodone()
//   {
//    var a=5;
//    var b=6;
//    var c=2*(a+b);
//     document.getElementById("root").innerHTML=c;
//   }
//   methodtwo()
//   {
//     var a=5;
//     var b=100;
//     var c=2*(a+b);
//     document.getElementById("root").innerHTML=c;
//   }
// }
// var mydemo=new Demo();
// mydemo.methodtwo();

//without jsx valiya element create pandrathuku keela varra mathiri create pannikalam
// const ele = createElement("h1", {}, "ReactJS")
// const main = createElement("div",{},
//                 createElement("h1", {}, ele),
//                 createElement("h1", {className:"sample"}, "Rupu Thalaivar"),
//                 createElement("h1", {}, "Murugan"),
//                 createElement("li", {}, "ReactJS"),
//                 createElement("li", {}, "ReactJS"),
//                 createElement("li", {}, "ReactJS"),
//                 createElement("li", {}, "Vel")
//                 );
//
//************************************************** */
// With jsx valiya element create pandrathu ippadi pannikalam
// var values = "I'm Velmurugan";
// function getName(){
//   return 'Function valiya values pass pannikalam'
// }
// const main = (
//   <div>
//     <h1 className='sample'>React Js</h1>
//     <h2 style={{color:"red",fontSize:"60px" }}>React Js</h2>
//     <h3>React JS</h3>
//     <h4>React Js</h4>
//     <h5>React Js</h5>
//     <h6>React Js</h6>
//     {values} {9*8}
//     { false ? "true" : "false"} { 1<9 ? "true": "false"}
//     {getName()}
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   main
//* <React.StrictMode>
//*   <App />
//* </React.StrictMode>
// );
//************ */

// example ku jsx valiya element create panni paathachu
// const main = (
//   <div className='mains'>
//     <div className='first'>
//       <h1>React Js</h1>
//       <p>First Div of This section</p>
//     </div>
//     <div className='second'>
//       <h1>React Js</h1>
//       <p>Second Div of This section</p>
//     </div>
//   </div>
// )
//******************************************
// ithe maathiri array vachi loop panniyum pakkalam

// const arr = ["Vel","Abu","Moorthi","vel"];
// const arr1 = ["rupu","pravin","rajith","rajith"];
// const main = (
//   <div>
//     {arr.map((item,index)=>(
//       <h1 key={index}>{item}</h1>
//     ))
//     }
//     {arr1.map((item,index) =>(
//       <div key={item}>
//         <li>{item}</li>
//       </div>
//     ))
//     }
//   </div>
// )

// **********************************
// function kulla use panni render panna porom
// function name-i tag aaga kudukka vendum

// ithu multiple components render pandrathukaga code poduren
// function First() {
//   return (
//     <div>
//       <p>Im velmurugan</p>
//     </div>
//   );
// }
// function Second() {
//   return (
//     <div>
//       <p>Im a Front End Developer</p>
//     </div>
//   );
// }
// function Time(){
//   return (
//     <h1>{new Date().toLocaleTimeString()}</h1>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Sample(props) {
//   return (
//     <div className="mains">
//       <div className="first">
//         <h1>React Js</h1>
//         <p>First Div of This section</p>
//         <p>{props.name}</p>
//       </div>
//       <div className="second">
//         <h1>React Js</h1>
//         <p>Second Div of This section</p>
//       </div>
//       <First />
//       <Second />
//       <Time />
//     </div>
//   );
// }
// multiple components render pannikalam athu epadi nu pakkalam
// function Rendercomponent(){
//   root.render(
//     <Sample name="Im a Front End Developer"/>
    // main
//   );
//   }
//   setInterval(Rendercomponent,1000);


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
    // main
  // <Export content="values"/>
// );

// ****************************************************************

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirstClass/>
);
// reportWebVitals();
