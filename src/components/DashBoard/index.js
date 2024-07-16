import React from 'react'; 
import {useNavigate} from "react-router-dom" 
import "./index.css";
const Dashboard = () => { 
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("userDetails")) 
    const logout=()=>{
        localStorage.removeItem("userDetails")
        navigate("/signup")

    }
    return (  
        <div className="background">  
            <div className="nav-container"> 
            
            <button className="logout-button" onClick={logout}>Logout</button>
            </div> 
            <h1 className="company-title">Futura Paints</h1> 
            <p className="slogan">Let's Discover the Joy Of the Life Through Colors</p>
            <div className="profile-container">
                <div className="profile-outline">
                <img src="https://tse1.mm.bing.net/th?id=OIP.01SfV54_RXChWWsGwAisngHaHa&pid=Api&P=0&h=180" className="profile-pic" alt="profile"/>
                </div>
                <p className="user-name">Ram Joseph</p>
                <div className="phone-container">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.KsUuoYppdqDXu9jVCnjB2gHaHa&pid=Api&P=0&h=180" className="call-icon" alt="call"/>
                    <p className="user-text">{user.user_phone}</p>
                </div>
                <div className="phone-container">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.B6ZewLvxt1cQfZg50a9EzgHaHa&pid=Api&P=0&h=180" className="call-icon" alt="email"/>
                    <p className="user-text">{user.user_email}</p>
                </div>
                <div className="phone-container">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.08fpWUoIqJOq0ffCgiLgkgHaJI&pid=Api&P=0&h=180" className="call-icon" alt="address"/>
                    <p className="user-text">{user.user_city}-{user.user_zipcode}</p>
                </div>
        
            </div>
        </div>  
    );  
};  

export default Dashboard;