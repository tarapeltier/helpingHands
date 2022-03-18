import React, { useState } from 'react'
import {Link, navigate} from '@reach/router';
import './Master.css';

const Admin = () => {
    const truePass="mySecretPage"
    const [passIn,setPassIn] = useState("");
    const [errors, setErrors] = useState("");

    const checkPassword = (e) =>{
        e.preventDefault();
        if (passIn === truePass){
            navigate('/home', { state : {admin: true}})}
        else {
                setErrors('incorrect password');
            }
        }

    return (
        <>
            <form onSubmit={checkPassword}>
                <p>{errors}</p>
                <label>password</label>
                <input type='password' onChange={(e)=>setPassIn(e.target.value)}></input>
                <button type='submit'>Enter</button>
            </form>
        </>
    )
}

export default Admin;

