import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { FaBackspace } from "react-icons/fa";
import Masonry from 'react-masonry-css';
import '../App.css';

const Stories = (props) => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [editTitle, setEditTitle] = useState("not-changed");
    const [editBody, setEditBody] = useState("not-changed");
    const [allStories,setAllStories] = useState([]);
    const [errors,setErrors] = useState([]);
    const [errors2,setErrors2] = useState([]);
    const [errors3,setErrors3] = useState([]);
    const [fileData, setFileData] = useState();

    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const passedState = location.state;
    console.log(props)
    if (isAdmin === false && passedState.admin){
        setIsAdmin(true);
        }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/story/all")
        .then((res)=>{
            console.log(res.data);
            setAllStories(res.data);})
        .catch((err)=>{
            console.log(err);})
    }, [])

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        //format post request to upload image
        const data = new FormData();
        data.append('image', fileData);

        //make a post request to upload image
        axios.post('http://localhost:8000/api/single', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            })
            .then(res=>{
                console.log('file sent successfully'); 
                }
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            })

        //make a post request to create a new story
        if (fileData === undefined){
            setErrors2([...errors2, "Image file is required"]);
        }
        else{
            axios.post('http://localhost:8000/api/story/create', {
                title, //shorthand
                body,
                imageFile: fileData.name
                })
                .then(res=>{
                    console.log(res); 
                    console.log(res.data);
                    setAllStories([...allStories,res.data]);
                    }
                )
                .catch(err=>{
                    const errorResponse2 = err.response.data.errors; 
                    const errorArr2 = []; 
                    for (const key of Object.keys(errorResponse2)) { 
                        errorArr2.push(errorResponse2[key].message);
                    }
                    // Set Errors
                    setErrors2(errorArr2);
                }) 
        }
    }
    
    const editHandler = (e, story) => {
        e.preventDefault();
        
        //detect unchanged inputs
        let submitEditTitle;
        if (editTitle === "not-changed"){
            submitEditTitle=story.title;
        }
        else{
            submitEditTitle = editTitle;
        }
        let submitEditBody;
        if (editBody === "not-changed"){
            submitEditBody=story.body;
        }
        else{
            submitEditBody = editBody;
        }

        //validate
        if (submitEditTitle.length < 3){
            setErrors3([...errors3, "Title must be more than 3 characters"]);
            return;
        }
        if (submitEditBody.length < 3){
            setErrors3([...errors3, "Body must be more than 3 characters"]);
            return;
        }

        //make a put request to edit story
        axios.put('http://localhost:8000/api/story/'+story._id, {
            title: submitEditTitle, 
            body: submitEditBody,
            imageFile: story.imageFile
            })
            .then(res=>{
                setErrors3([]);
                window.location.reload();
                }
            )
            .catch(err=>{
                const errorResponse3 = err.response.data.errors; 
                const errorArr3 = []; 
                for (const key of Object.keys(errorResponse3)) { 
                    errorArr3.push(errorResponse3[key].message);
                }
                // Set Errors
                setErrors3(errorArr3);
            }) 
    }

    const deleteThis = (e, storyId) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/story/' + storyId)
        .then(res => {
            setAllStories(allStories.filter(story => story._id !== storyId ));
        })
        .catch(err => console.log(err));
    }

    //conditional renders for admin
    let addStoryForm;
        if (isAdmin) {
            addStoryForm = <form onSubmit={submitHandler}>
                            <h3>Add a new story</h3>
                                {errors.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
                                {errors2.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
                            <div className='input-title'>
                                <label>Title</label>
                                <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
                            </div>
                            <div className='input-body'>
                                <label>Body</label>
                                <textarea rows='10' cols='50' onChange={(e)=>setBody(e.target.value)}></textarea>
                            </div>
                            <input type='file' onChange={fileChangeHandler} />
                            <button className='btn btn-outline-primary shadow-none' type='submit'>Add a new story</button>
                        </form>;
        }
        else {
            addStoryForm = <></>;
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
                    <h1 className='story-wrap'>Highlighted Stories of Success</h1>
                    <div className='masonry-wrapper'>
                        <Masonry
                            breakpointCols={{default: 3,
                                            1500: 2,
                                            700: 1}}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {
                                allStories.map((story, index) => {
                                    //conditional renders for admin
                                    let deleteIcon;
                                    let editButton;
                                    if (isAdmin) {
                                        deleteIcon = <FaBackspace onClick={(e)=>deleteThis(e,story._id)} className='delete'></FaBackspace>;
                                        editButton = <button className='btn btn-outline-primary shadow-none' type="button" data-bs-toggle="collapse" data-bs-target={"#edit"+index} aria-expanded="false" aria-controls={"edit"+index}>
                                                        Edit
                                                    </button>;
                                    }
                                    else {
                                        deleteIcon = <></>;
                                        editButton = <></>;
                                    }
                                    return(
                                        <div key={index} className="card my-card">
                                            <img className="card-img-top" src={require('../assets/'+story.imageFile)} alt="Card cap"/>
                                            <div className="card-body">
                                                <div className='flex-container'>
                                                    <h5 className="card-title story-card-title">{story.title}</h5>
                                                    {deleteIcon}
                                                </div>
                                                <button className='btn btn-outline-primary shadow-none' type="button" data-bs-toggle="collapse" data-bs-target={"#read-more"+index} aria-expanded="false" aria-controls={"read-more"+index}>
                                                    Read more
                                                </button>
                                                <div className="collapse" id={"read-more"+index}>
                                                    <div className="card card-body">
                                                        <pre className='card-body-wrap'><p className="card-text read-more">{story.body}</p></pre>
                                                    </div>
                                                </div>
                                                {editButton}
                                                <div className="collapse" id={"edit"+index}>
                                                    <div className="card card-body">
                                                        <form onSubmit={(e)=>editHandler(e,story)}>
                                                            {errors3.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
                                                            <h3>Edit this story</h3>
                                                            <div className='edit-title'>
                                                                <label>Title</label>
                                                                <input type='text' defaultValue={story.title} onChange={(e)=>setEditTitle(e.target.value)}></input>
                                                            </div>
                                                            <div className='edit-body'>
                                                                <label>Body</label>
                                                                <textarea rows='10' defaultValue={story.body} onChange={(e)=>setEditBody(e.target.value)}></textarea>
                                                            </div>
                                                            <button className='btn btn-outline-primary shadow-none' type='submit'>Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Masonry>
                    </div>
                    {addStoryForm}
                </div>
            </div>
        </>
    )
}

export default Stories;

