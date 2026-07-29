import React, {Component} from "react";
import Studentprofile from "./Studentprofile";

class Studentdata extends Component{
    state = {
        name : "Mujasheer",
        rollno : 101,
        notifications : 0
    }

    addnotification = ()=>{
        this.setState({
            notifications : this.state.notifications+1
        })
    }
    render(){
        console.log("Student Data Rendered")
        return(
            <div>
                <Studentprofile 
                name = {this.state.name}
                rollno = {this.state.rollno}/>

                <h2> Notifications : {this.state.notifications}</h2>

                <button onClick={this.addnotification}>Add Notification</button>

            </div>
        )
    }
}

export default Studentdata