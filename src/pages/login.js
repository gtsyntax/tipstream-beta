import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";

function Login() {
    useEffect(() => {
        document.title = "Loign - Tipstream";
    });

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    
    // login required field
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');

    // error handling
    const [error, setError] = useState('');
    const isInvalid = emailAddress === "" || password === "";

    const handleLogin = () => {
        
    }
    

    return <p>Login Page</p>
}

export default Login;