import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom';
import './Master.css';


const HomePage = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const passedState = location.state;
    console.log('yyy',passedState);
    //used to check for admin passed in through props
    let propsAdmin;
    console.log('xxx',props)
    //was admin passed in through props?
    if (passedState === null || !passedState.admin ){
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
            <div className='main-home'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators car-ind">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="IMG_4474_.jpg" className="d-block w-100 car-img" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="gifts.jpeg" className="d-block w-100 car-img" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="IMG_6029.jpg" className="d-block w-100 car-img" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <div className='content-home'>
                    
                    <div className='mission story-wrap'>
                        <h3 className='mission-title'>Our Mission:</h3>
                        <p className='mission-body main-text'>Helping Hands - There After Foster Care works with local social workers to meet the needs of young adults who are
                        aging out of foster care. While some of their needs are met through social service programs, they face challenges that youth with supportive parents do not. We step in to fill the gaps, supporting youth in their move toward independence. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

