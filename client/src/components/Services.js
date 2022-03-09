import React from 'react'
import {Link, navigate} from '@reach/router';
import { FaUserGraduate, FaHandshake, FaHome, FaShoppingCart, FaBaby, FaGavel } from "react-icons/fa";
import './Services.css';

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
                    <div className='headline'>
                        <p>We work one-on-one with young adults ageing out of foster care
                            to support their individual needs. Some available services include:
                        </p>
                    </div>
                    <div className='card-container'>
                        <div className='cards'>
                            <div className='card'><FaUserGraduate className='icon'/>Education
                                <ul>
                                    <li className='bullet'>Application assistance</li>
                                    <li className='bullet'>Tutoring</li>
                                    <li className='bullet'>Fighting bullies</li>
                                </ul>
                            </div>
                            <div className='card'><FaHandshake className='icon'/>Employment
                                <ul>
                                    <li className='bullet'>Resume prep</li>
                                    <li className='bullet'>Transportation to interviews</li>
                                    <li className='bullet'>Equipment</li>
                                </ul>
                            </div>
                            <div className='card'><FaHome className='icon'/>Housing
                                <ul>
                                    <li className='bullet'>Transportation</li>
                                    <li className='bullet'>Application assistance</li>
                                    <li className='bullet'>Fighting realtors</li>
                                </ul>
                            </div>
                        </div>
                        <div className='cards'>
                            <div className='card'><FaShoppingCart className='icon'/>Essential Items
                            <ul>
                                    <li className='bullet'>Food</li>
                                    <li className='bullet'>Clothing</li>
                                    <li className='bullet'>Toiletries</li>
                                </ul>
                            </div>
                            <div className='card'><FaBaby className='icon'/>Parenting
                            <ul>
                                    <li className='bullet'>Diapers</li>
                                    <li className='bullet'>Toys</li>
                                    <li className='bullet'>Baby food</li>
                                </ul>
                            </div>
                            <div className='card'><FaGavel className='icon'/>Incarceration
                            <ul>
                                    <li className='bullet'>Commisary</li>
                                    <li className='bullet'>Planning</li>
                                    <li className='bullet'>Fighting gangs</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

