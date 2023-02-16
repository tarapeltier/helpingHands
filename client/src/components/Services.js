import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FaUserGraduate, FaClinicMedical, FaGifts, FaHome, FaShoppingCart, FaBaby, FaGavel } from "react-icons/fa";
import Masonry from 'react-masonry-css';
import '../App.css';

const Services = (props) => {
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
                    <div className='story-wrap' style={{'marginBottom':'8%','padding':'2%'}}>
                        <p className='main-text'>We work one on one with young adults aging out of foster care
                            to support their individual needs. Some examples of the many ways we help include:
                        </p>
                    </div>
                    <div className='card-wrapper'>
                        <Masonry
                            breakpointCols={{default: 4,
                                            1200: 3,
                                            900: 2,
                                            580: 1}}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            <div className='flip-card'>
                                <div className='flip-inner'>
                                    <div className='card local-card flip-front'>
                                        <FaUserGraduate className='icon' size='m'/>
                                        <h3 className='card-body'>Education</h3>
                                    </div>
                                    <div className='card local-card flip-back'>
                                        <p className='card-body smaller my-card-text' style={{marginTop: "10%"}}>
                                        Volunteers meet with youth to help them learn how to complete a GED program, 
                                        if necessary, choose a post-secondary field of study, apply to college or a 
                                        technical training program, complete a financial aid application,  register 
                                        for classes, and find and access educational support services.</p>
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
                                        <p className='card-body smaller my-card-text' style={{marginTop: "20%"}}>
                                        Volunteers and community members help youth find and furnish long-term housing. 
                                        When necessary, we provide a security deposit and the first month’s rent. </p>
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
                                        <p className='card-body smaller my-card-text' style={{marginTop: "13%"}}>
                                        We provide youth moving into their first apartment a laundry basket full 
                                        of the items they need for their first night in a new home. These  
                                        include a pillow and blanket, silverware, a sauce-pan, towels, soap, a meal, 
                                        and other necessary items. </p>
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
                                        <p className='card-body smaller my-card-text' style={{marginTop: "20%"}}>
                                        Many youth aging out of foster care become parents as young adults. 
                                        We help furnish their nursery and provide needed baby care items.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip-card'>
                                <div className='flip-inner'>
                                    <div className='card local-card flip-front'>
                                        <FaGavel className='icon' size='m'/>
                                        <h3 className='card-body'>Aid for the Incarcerated</h3>
                                    </div>
                                    <div className='card local-card flip-back'>
                                        <p className='card-body smaller my-card-text'>
                                        When a young adult who has aged out of foster care is incarcerated, it is often 
                                        without the support of parents or 
                                        other family members who care. We send birthday and holiday cards to let 
                                        them know they are not forgotten, and deposit money to help with commissary 
                                        items. We plan in advance to provide a wardrobe, phone, and other essentials 
                                        they’ll need upon release.</p>
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
                                        <p className='card-body smaller my-card-text' style={{marginTop: "13%"}}>
                                        Youth who have been in foster care often have medical needs that were not met 
                                        when they were younger. Even though they may receive Medicaid, it will not cover 
                                        orthodontics or eyeglasses after they are 19. We work with social workers to ensure 
                                        youth get the equipment they need. </p>
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
                                        <p className='card-body smaller my-card-text' style={{marginTop: "13%"}}>
                                        Social workers often reach out to us when a young adult 
                                        reports they have no food or are in desperate need of diapers, fuel, transportation, 
                                        debt management, or other necessary assistance. We provide funding and/or items to help youth meet their 
                                        basic living requirements. </p>
                                    </div>
                                </div>
                            </div>
                        </Masonry>
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
        </>
    )
}

export default Services;

