import React, { useState } from 'react'
import {Link, navigate} from '@reach/router';
import BoardMembers from './BoardMembers';
import './Master.css';

const AboutUs = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);

    console.log(props)
    if (isAdmin === false && props.location.state.admin){
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
                    <div className='about-wrapper'>
                        
                        <div className='board'>
                            <h3 className='board-title'>Board Members:</h3>
                            <BoardMembers/>
                        </div>
                        <p></p>
                        <p className='story-body'>Youth who turn 18 while in foster care often enter
                            adulthood without the benefit of a support system. Nearly 1/3 of youth who age of foster care
                            experience homelessness before they are 21. Many experience unemployment, become
                            parents at an early age, and struggle financially.</p>
                        <div className='contact'>
                            <h3 className='contact-title'>Contact Us:</h3>
                            <p className='contact-body'>Visit us at 1234 Noneya Way</p>
                            <p className='contact-body'>ouremail@email.com</p>
                            <p className='contact-body'>777-777-7777</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;

