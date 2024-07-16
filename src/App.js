import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import LoginForm from './components/LoginForm';  
import SignUp from './components/SignUp';  
import Dashboard from "./components/DashBoard"
import './App.css';  

function App() {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route exact path="/" element={<LoginForm />} />  
        <Route exact path="/signup" element={<SignUp />} />  
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>  
    </BrowserRouter>  
  );  
}  

export default App;