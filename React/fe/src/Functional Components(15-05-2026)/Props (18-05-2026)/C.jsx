import React from 'React'


function C(props){
    let k = 2000
    // console.log(props)
    console.log(props.Value)
    props.Value(k)
    return(
        <div>
            <h1>This is the C component</h1>

            {/* <h4>Data from A:{props.Value}</h4> */}
            
        </div>
    )
}

export default C