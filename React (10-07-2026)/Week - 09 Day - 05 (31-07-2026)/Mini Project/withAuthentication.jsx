function withAuthentication(Component){

    return function(props){

        let isLoggedIn=true

        if(isLoggedIn){
            return <Component {...props}/>
        }

        return <h2>Please Login</h2>
    }

}

export default withAuthentication