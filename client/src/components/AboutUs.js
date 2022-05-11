import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom';
import BoardMembers from './BoardMembers';
import './Master.css';

const AboutUs = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const passedState = location.state;
    console.log(props)
    if (isAdmin === false && passedState.admin){
        setIsAdmin(true);
        console.log('admin is true')
        }
    else if (isAdmin === true) {
        console.log('admin is true')
    }
    else {
        console.log('admin is false')
    }


    return (
        <>
            <div className='nav'>
                <div className='nav-img-cont'>
                    <img className='nav-img' src='biglogo2.jpg' alt='logo' ></img>
                </div>
                <div className='nav-menu'>
                    <Link className='menu-link' to={"/"} state={{admin: isAdmin}}> Home </Link>
                    <Link className='menu-link' to={"/about"} state={{admin: isAdmin}}> About Us </Link>
                    <Link className='menu-link' to={"/stories"} state={{admin: isAdmin}}> Stories </Link>
                    <Link className='menu-link' to={"/services"} state={{admin: isAdmin}}> Services </Link>
                    <Link className='menu-link-don' to={"/help"} state={{admin: isAdmin}}> Donate </Link>
                </div>
            </div>
            <div className='main'>
                
                <div className='content-local'>
                    <div className='about-wrapper'>
                        
                        
                        <div className='story-wrap'>
                            <p className='story-body'>Helping Hands is a charitable foundation dedicated to helping young adults
                            who are emerging out of the foster care system. </p>
                            <p className='story-body'>Youth who turn 18 while in foster care often enter
                                adulthood without the benefit of a support system. Nearly 1/3 of youth who age of foster care
                                experience homelessness before they are 21. Many experience unemployment, become
                                parents at an early age, and struggle financially.</p>
                            <p className='story-body'>We work with volunteers and donors to help these young adults
                                overcome any difficulties they may face in their transition to independent living. </p>
                            <p></p>
                        </div>
                        <div className='board'>
                            <h3 className='board-title'>Board Members:</h3>
                            <BoardMembers/>
                        </div>
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

