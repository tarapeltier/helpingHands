import React, { useState } from 'react'
import {Link, navigate} from '@reach/router';
import { FaUserGraduate, FaClinicMedical, FaGifts, FaExpandAlt, FaHome, FaShoppingCart, FaBaby, FaGavel } from "react-icons/fa";
import Masonry from 'react-masonry-css';
import './Master.css';

const Services = (props) => {
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
        console.log('before redirect admin',isAdmin)
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
                    
                    <div className='story-wrap' style={{'marginBottom':'8%','padding':'2%'}}>
                        <p>We work one-on-one with young adults ageing out of foster care
                            to support their individual needs. Some available services include:
                        </p>
                    </div>
                    
                    <div className='card-wrapper'>
                    <Masonry
                        breakpointCols={{default: 4,
                                        1800: 3,
                                        1300: 2,
                                        800: 1}}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaUserGraduate className='icon' size='m'/>
                                    <h3 className='card-body'>Education</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>Volunteers meet with youth to help them learn how to complete financial aid applications, apply to college, register for classes, and discuss majors.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaHome className='icon' size='m'/>
                                    <h3 className='card-body'>Housing</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>Volunteers and community members help youth find and furnish long term housing. When necessary, we provide security deposits and first month’s rent.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaClinicMedical className='icon' size='m'/>
                                    <h3 className='card-body'>Medical Aids</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>Youth who have been in foster care often have medical needs that were not met when they were younger. Even though they might have Medicaid, it will not cover orthodontics or braces after they are 19. We work with social workers to ensure youth get the devices they need.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaShoppingCart className='icon' size='m'/>
                                    <h3 className='card-body'>Emergency Essential Items</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>Social workers often reach out to Helping Hands- There
                                After Foster Care when a youth reports that they have no food or are in desperate need of diapers, gas, transportation, debt management, etc. We provide funding and/or necessary items to help youth meet their basic living requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaBaby className='icon' size='m'/>
                                    <h3 className='card-body'>Parenting</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>Some youth aging out of foster care become parents as young adults. We help furnish their nursery and provide needed baby care products.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaGifts className='icon' size='m'/>
                                    <h3 className='card-body'>First Night Home Baskets</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>We provide youth moving into their first apartment a laundry basket full of the items they need for their first night in a new home. These baskets include a pillow, blanket, silverware, a sauce pan, towels, soap, a meal, and other necessary items. </p>
                                </div>
                            </div>
                        </div>
                        <div className='flip-card'>
                            <div className='flip-inner'>
                                <div className='card local-card flip-front'>
                                    <FaGavel className='icon' size='m'/>
                                    <h3 className='card-body'>Incarceration</h3>
                                </div>
                                <div className='card local-card flip-back'>
                                    <p className='card-body smaller'>When a youth who aged out of foster care is incarcerated they are detained without the benefit of parents or other family members to help with money for toiletries and commissary items. They are also left without the social support of people who care. We deposit money on incarcerated youth’s commissary accounts. We send birthday and Christmas cards to let them know we care. Upon their release, we help support their needs for a wardrobe, phone, and other essentials.</p>
                                </div>
                            </div>
                        </div>
                        
                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;

