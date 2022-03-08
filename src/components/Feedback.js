import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Feedback=()=>{
    const navigate=useNavigate();

    const [user,setUser]=useState({
        email:"",
        feedback:"",
        person:""
    });
    const {email, feedback, person}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    };


    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/profile",user);
        alert('feedback sent.. wait for reply!!');    
        navigate('/');
    }

    return(
        <div style={{textAlign:'center',marginTop:'10%'}}>
        <form onSubmit={e=>onSubmit(e)}>
            <input type='text' required name='person' placeholder="Enter your name" value={person} onChange={e=>onInputChange(e)}/><br/>
            <input type='email' required name='email' placeholder="Enter your email" value={email} onChange={e=>onInputChange(e)}/><br/>
            <textarea type='text'  required placeholder='feedback' name="feedback" value={feedback} onChange={e=>onInputChange(e)}/><br/>
            <button type='submit'>Send</button>
        </form>
        </div>
)}

export default Feedback;