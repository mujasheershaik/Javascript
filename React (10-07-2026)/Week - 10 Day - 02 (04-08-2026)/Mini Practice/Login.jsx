import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate()

    function login(){
        localStorage.setItem("login","true")
        navigate("/Dashboard")
    }
    return (
        <div>
            <h2>Login Page</h2>

            <button onClick={login}>
                Login
            </button>
        </div>
    )
}

export default Login