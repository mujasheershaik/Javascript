import React, {Component} from "react";

class Attendance extends Component{

    state = {
        status : "Absent"
    }

    markpresent = ()=>{
        this.setState({
            status : "Present"
        })
    }
    render(){
        return(
            <div>
                <h2>Attendance : {this.state.status}</h2>

                <button onClick={this.markpresent}>Mark Present</button>
            </div>
        )
    }
}

export default Attendance