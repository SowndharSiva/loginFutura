import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import './index.css';  

const SignUp = () => {  
    const [firstname, setFirstname] = useState('');  
    const [email, setEmail] = useState('');  
    const [phone, setPhone] = useState('');  
    const [password, setPassword] = useState('');  
    const [isFilled, setIsFilled] = useState(true);  

    const navigate = useNavigate();  

    const changeEmail = (event) => {  
        setEmail(event.target.value);  
    };  

    const changePhone = (event) => {  
        setPhone(event.target.value);  
    };  

    const changePassword = (event) => {  
        setPassword(event.target.value);  
    };  

    const changeFirstName = (event) => {  
        setFirstname(event.target.value);  
    };  

    const submitLogin = async (event) => {  
        event.preventDefault();  
        if (email === '' || phone === '' || firstname === '' || password === '') {  
            setIsFilled(false);  
        } else {  
            const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration';  
            const userDetails = {  
                user_email: email,  
                user_phone: phone,  
                user_password: password,  
                user_firstname: firstname,  
                user_lastname: 'Joseph',  
                user_city: 'Paris',  
                user_zipcode: 364673  
            };  
            console.log(userDetails);  
            const options = {  
                method: 'POST',  
                body: JSON.stringify(userDetails)  
            };  
            const response = await fetch(url, options);  
            console.log(response);  
           const setItem=await localStorage.setItem("userDetails",JSON.stringify(userDetails))
           console.log(setItem)
            navigate('/');  
        }  
    };  

    return (  
        <div className="bg-container">  
            <h1 className="company-name">Futura Paints</h1>  
            <p>Let the Colors Shine the Life</p>  
            <form className="login-container" onSubmit={submitLogin}>  
                <p className="login-title">Sign Up</p>  
                <p className="input-title" htmlFor="firstname">Firstname *</p>  
                <input id="firstname" className="input-element" type="text" value={firstname} onChange={changeFirstName} />  
                <p className="input-title" htmlFor="email">Email *</p>  
                <input id="email" className="input-element" type="text" value={email} onChange={changeEmail} />  

                <p className="input-title" htmlFor="password">Password *</p>  
                <input id="password" className="input-element" type="password" value={password} onChange={changePassword} />  

                <p className="input-title" htmlFor="phone">Phone no *</p>  
                <input id="phone" className="input-element" type="text" value={phone} onChange={changePhone} />  
                {isFilled ? null : <p className="required">Fill the Required</p>}  

                <button className="submit-button" type="submit">Create an account</button>  
                <p className="input">Already have an account?</p>  
            </form>  
        </div>  
    );  
};  

export default SignUp;