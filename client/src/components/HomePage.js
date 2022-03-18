import React, { useState } from 'react'
import {Link, navigate} from '@reach/router';
import './Master.css';

const HomePage = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);

    //avoid crash when rendered without state props
    let propsAdmin;
    
    if (props.location.state === null){
        console.log('its actually false')
        propsAdmin = false
    }
    else{
        propsAdmin = true
    }
    console.log(props)
    if (isAdmin === false && propsAdmin){
        
        setIsAdmin(true);
        console.log('admin is true')
        }
    else if (isAdmin === true) {
        console.log('admin is true')
    }
    else {
        console.log('admin is false')
    }

    const directHome = () =>{
            navigate('/home', {state:{admin: isAdmin}})
        }

    return (
        <>
            <div className='main'>
                <div className='menu'>
                    <div className='menu-head'>
                        <img className='header-img' src='header.png' alt='logo' onClick={()=>directHome()} ></img>
                    </div>
                    <div className='menu-links'>
                        <ul>
                            <li>
                                <Link className='menu-link' to="/about" state={{admin: isAdmin}}> Who we are </Link>
                            </li>
                            <li>
                                <Link className='menu-link' to="/stories" state={{admin: isAdmin}}> Who we help </Link>
                            </li>
                            <li>
                                <Link className='menu-link' to="/services" state={{admin: isAdmin}}> What we do </Link>
                            </li>
                            <li>
                                <Link className='menu-link' to="/help" state={{admin: isAdmin}}> How you can help </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-local'>
                    <div className='mission'>
                        <h3 className='mission-title'>Our Mission:</h3>
                        <p className='mission-body'>HH-TAFC supports youth aging out of foster care to successfully transition
                        into adulthood.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

