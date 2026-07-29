import React, {Component} from "react";

export default class Child2 extends Component{
    render(){
        console.log("Child Component Rendered")
        return <h2>Name : {this.props.name}</h2>
    }
}

