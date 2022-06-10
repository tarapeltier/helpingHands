import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { FaBackspace } from "react-icons/fa";
import './Master.css';
import StripeContainer from "./StripeContainer"

const Donate = (props) => {
    const [newNeed,setNewNeed] = useState("");
    const [allNeeds,setAllNeeds] = useState([]);
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


    useEffect(()=>{
        axios.get("http://localhost:8000/api/need/all")
        .then((res)=>{
            console.log(res.data);
            setAllNeeds(res.data);})
        .catch((err)=>{
            console.log(err);})
    }, [])


    const submitHandler2 = (e) => {
        e.preventDefault()
        console.log('we here')
        console.log(newNeed)
        
        //make a post request to create a new need
        axios.post('http://localhost:8000/api/need/create', {
            description: newNeed
            })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setAllNeeds([...allNeeds,res.data])
                }
            )
            .catch(err=>{
                console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
            }) 

        
    }

    const deleteThis = (e, needId) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/need/' + needId)
        .then(res => {
            console.log(res);
            setAllNeeds(allNeeds.filter(need => need._id !== needId ))
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
                        <p>Please consider donating to Helping Hands! All cash donations and in-kind 
                            gifts go directly to enriching the lives of young adults in need.</p>
                        <p> To sign up for monthly donations or to schedule item delivery, please contact us at thereafterfostercare@gmail.com</p>
                    </div>
                    <div className='column-wrapper'>
                        
                        <div className='donate'>
                            <h2>Ongoing Needs</h2>
                            <p className='cash'>Cash donations help us to meet the individual needs of the youth we support in a timely manner.</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate;

