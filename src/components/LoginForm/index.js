import { useState } from "react";  
import { useNavigate,Link } from "react-router-dom";  
import "./index.css";  

const LoginForm = () => {  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [isEmail, setIsEmail] = useState(true);  
    const [isPassword, setIsPassword] = useState(true); 
    const [wrongInfo,setInfo] =useState(true);
    const navigate = useNavigate();  

    const changeEmail = (event) => {  
        setEmail(event.target.value);  
    }  

    const changePassword = (event) => {  
        setPassword(event.target.value);  
    }  

    const submitLogin = async (event) => {  
        event.preventDefault();  
        if (email === "" && password === "") {  
            setIsEmail(false);  
            setIsPassword(false);  
        } else if (password === "") {  
            setIsPassword(false);  
        } else if (email === "") {  
            setIsEmail(false);  
        } else {  
            const url = "https://syoft.dev/Api/userlogin/api/userlogin";  
            const userDetails = { user_email: email, user_password: password };  
            const options = {  
                method: "POST",  
                body: JSON.stringify(userDetails)  
            }  
            const response = await fetch(url, options);  
            console.log(response);  
            const userInfo=JSON.parse(localStorage.getItem("userDetails"))
            console.log(userInfo)
            if(email===userInfo.user_email && password ===userInfo.user_password){
                navigate("/dashboard");  
            }else{
                setInfo(false);
            }
            
        }  
    }  

    return (  
        <div className="bg-container">  
            <h1 className="company-name">Futura Paints</h1>  
            <p>Let the Colors Shine the Life</p>  
            <form className="login-form" onSubmit={submitLogin}>  
                <p className="login-title">Login</p>  
                <p className="input-title" htmlFor="email">Email *</p>  
                <input id="email" className="input-element" type="text" value={email} onChange={changeEmail} />  
                {isEmail ? null : <p className="required">required</p>}  
                <p className="input-title" htmlFor="password">Password *</p>  
                <input id="password" className="input-element" type="password" value={password} onChange={changePassword} />  
                {isPassword ? null : <p className="required">required</p>}  
                {wrongInfo?null:<p className="required">Invalid Email or Password !</p>}
                <button className="submit" type="submit">SIGN IN</button>  
                <Link to="/signup" className="input1">Didn't Have an Account?</Link>  
            </form>  
        </div>  
    );  
};  

export default LoginForm;