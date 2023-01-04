import React,{Component} from "react";
import SecondClass from "./SecondClass";


// class component render
class FirstClass extends React.Component{
    
    getData = (param)=>{
        console.log("param",param);
    }

    render(){
        // console.log('getData',this);
        return <div> 
            <h2>single class component</h2>
            <p>Class components render pandrathu ipadi use pannikalam (rce)</p>
            <p>oru js file open panni athu parent ku render pandrathu epadi nu pakkalam</p>
            <p>first create js file = add file in parent = extends react.Component = export = import</p>
            <p>import pannitu tags mathiri call pannanum</p>
            <h4>{this.props.name}</h4>
            {/* this.key word use panni props valiya intha file oda parent la irunthu intha child ku values pass pannikalam */}
            <SecondClass val={'another parent to child method valiya pass panniruken'} getData={this.getData} />
            
            </div>
    }
}



export default FirstClass;