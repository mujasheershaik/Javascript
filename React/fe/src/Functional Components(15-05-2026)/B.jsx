import React, { Component, Fragment } from 'react'

export class B extends Component {
    render(){
        return(
            <Fragment>
            {/* <> */}
                <h1>This is B component</h1>
            {/* </> */}
            <One/>
            </Fragment>
        )
    }
}

export default B 