import React, {PureComponent} from "react";

class Studentprofile extends PureComponent{
    render(){
        console.log("Student Profile rendered")
        return (
            <div>
                <h2>Name : {this.props.name}</h2>
                <h2>Roll No : {this.props.rollno}</h2>
            </div>
        )
    }
}

export default Studentprofile