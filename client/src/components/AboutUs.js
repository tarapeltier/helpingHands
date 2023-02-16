import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom';
import BoardMembers from './BoardMembers';
import '../App.css';

const AboutUs = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const passedState = location.state;
    if (isAdmin === false && passedState.admin){
        setIsAdmin(true);
        }

    return (
        <>
            <div className='nav'>
                <div className='nav-img-cont'>
                    <img className='nav-img' src='biglogo2.jpg' alt='logo' ></img>
                </div>
                <div className='nav-menu'>
                    <Link className='menu-link' to={"/"} state={{admin: isAdmin}}> Home </Link>
                    <Link className='menu-link' to={"/about"} state={{admin: isAdmin}}> About </Link>
                    <Link className='menu-link' to={"/stories"} state={{admin: isAdmin}}> Stories </Link>
                    <Link className='menu-link' to={"/services"} state={{admin: isAdmin}}> Services </Link>
                    <Link className='menu-link-don' to={"/help"} state={{admin: isAdmin}}> Donate </Link>
                </div>
            </div>
            <div className='main'>
                <div className='content-local'>
                    <div className='about-wrapper'>
                        <div className='story-wrap'>
                            <p className='story-body main-text'>Helping Hands - There After Foster Care is an all-volunteer charitable organization dedicated to helping young 
                                adults who are aging out of foster care. Working with local social workers in Boulder County, 
                                CO we help provide for the unmet needs of these young adults by providing support and emergency funding for education, 
                                housing, medical aids, and other essential items. </p>
                            <p className='story-body main-text'>Youth who turn 18 while in foster care often enter adulthood without the benefit of a 
                                support system. After reaching the age of 18, 20% of young adults who have aged out of foster care will be instantly homeless, 
                                and nearly one-third will experience homelessness before they are 21. Seventy percent of young women will become pregnant before 
                                turning 21, and fewer than 3% will earn a college degree in their lifetime.</p>
                            <p className='story-body main-text'>We work with volunteers and donors to help these young adults overcome the difficulties they face 
                                in their transition to independent living. </p>
                            <p></p>
                        </div>
                        <div className='board'>
                            <h3 className='board-title'>Volunteer Board Members:</h3>
                            <BoardMembers/>
                        </div>
                        <div className='contact'>
                            <h3 className='contact-title'>Contact Us:</h3>
                            <p className='contact-body'>2770 Arapahoe Rd, Ste 132-1014, Lafayette, CO 80026</p>
                            <p className='contact-body'>thereafterfostercare@gmail.com</p>
                            <p className='contact-body'>703-629-8469</p>
                            <p className='contact-body'><a href='https://m.facebook.com/groups/565566044060182'>Join us on Facebook</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;

