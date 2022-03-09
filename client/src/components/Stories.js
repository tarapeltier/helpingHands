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
                    <div className='mission'>
                        <h3 className='mission-title'>Our Mission:</h3>
                        <p className='mission-body'>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Ut dictum purus non tortor pretium, sed vulputate 
                        elit ornare. Ut a volutpat orci. Duis eu massa consectetur, interdum
                        nibh et, lobortis ex.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

