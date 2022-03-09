import React from 'react'
import {Link, navigate} from '@reach/router';
import './HomePage.css';

const HomePage = (props) => {
    
    const directHome = () =>{
            navigate('/home')
        }

    return (
        <>
            <div className='main'>
                <div className='menu'>
                    <div className='menu-head'>
                        <img className='header-img' src='header.png' alt='logo' onClick={()=>directHome()} ></img>
                    </div>
                    <div className='menu-links'>
                        <Link className='menu-link' to={"/about"}> Who we are </Link>
                        <Link className='menu-link' to={"/stories"}> Who we help </Link>
                        <Link className='menu-link' to={"/services"}> What we do </Link>
                        <Link className='menu-link' to={"/help"}> How you can help </Link>
                    </div>
                </div>
                <div className='content'>
                    <div className='in-kind'></div>
                    <div className='donate'></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

