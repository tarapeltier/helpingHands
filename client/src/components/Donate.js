import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { FaBackspace } from "react-icons/fa";
import '../App.css';
import StripeContainer from "./StripeContainer";

const Donate = (props) => {
    const [newNeed,setNewNeed] = useState("");
    const [allNeeds,setAllNeeds] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const passedState = location.state;
    console.log(props)
    if (isAdmin === false && passedState.admin){
        setIsAdmin(true);
        }

    useEffect(()=>{
        axios.get("/api/need/all")
        .then((res)=>{
            console.log(res.data);
            setAllNeeds(res.data);})
        .catch((err)=>{
            console.log(err);})
    }, [])

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const submitHandler2 = (e) => {
        e.preventDefault()
        console.log('we here')
        console.log(newNeed)
        
        //make a post request to create a new need
        axios.post('/api/need/create', {
            description: newNeed
            })
            .then(res=>{
                setAllNeeds([...allNeeds,res.data]);
                }
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
            })
    }

    const deleteThis = (e, needId) => {
        e.preventDefault();
        axios.delete('/api/need/' + needId)
        .then(res => {
            console.log(res);
            setAllNeeds(allNeeds.filter(need => need._id !== needId ));
        })
        .catch(err => console.log(err));
    }

    //conditional render for admin
    let addNeedForm;
    if (isAdmin){
        addNeedForm = <form id='addForm'>
                            <input type='text' value={newNeed} onChange = {(e)=>setNewNeed(e.target.value)}></input>
                            <button className='btn btn-outline-primary shadow-none' onClick={(e)=>submitHandler2(e)}>Add a need</button>
                        </form>
    }
    else{
        addNeedForm = <></>
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
                <div className='content-donate'>
                    <div className='header-wrapper story-wrap'>
                        <h1 className='donate-cta'>How can you help?</h1>
                        <p className='main-text'>Please consider donating to Helping Hands! All cash donations and in-kind 
                            gifts go directly to enriching the lives of young adults in need.</p>
                        <p className='main-text'> To sign up for monthly donations or to schedule donation drop-off, please contact us at thereafterfostercare@gmail.com</p>
                    </div>
                    <div className='column-wrapper'>
                        <div className='donate'>
                            <h2 className='donate-head'>Donate with Credit Card</h2>
                            <StripeContainer/>
                            <div className='donate-price'>
                                <p className='price'>$50 provides for emergency food for one week</p>
                                <p className='price'>$150 provides a “First Night Home Basket”</p>
                                <p className='price'>$250 provides a pair of eyeglasses</p>
                                <p className='price'>$500 provides for a nursery and layette for a new baby</p>
                                <p className='price'>$1000 provides the security deposit on a new apartment</p>
                            </div>
                            
                        </div>
                        <div className='in-kind'>
                            <div className='paypal-wrap'>
                                <h2 className='donate-head'>Donate with PayPal</h2>
                                <h5>(Scan or click the QR code)</h5>
                                <button className='qr-button' onClick={()=>{openInNewTab('https://www.paypal.com/donate/?hosted_button_id=F3HHYXG852ZNC')}}>
                                    <img className='qr-code' src='qr-code.png' alt='paypal'></img>
                                </button>
                            </div>
                            <h2>Current Needs</h2>
                            <table className='table in-kind-table'>
                                <thead>
                                    <tr>
                                        <th>
                                            Items we are currently seeking:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    allNeeds.map((need,index) => {
                                        //conditional renders for admin
                                        let deleteIcon;
                                        if (isAdmin) {
                                            deleteIcon = <FaBackspace onClick={(e)=>deleteThis(e,need._id)} className='delete'></FaBackspace>
                                        }
                                        else {
                                            deleteIcon = <></>
                                        }
                                        return(
                                            <tr key={index}>
                                                <td>{need.description}  {deleteIcon} </td>
                                                
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {addNeedForm}
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

export default Donate;

