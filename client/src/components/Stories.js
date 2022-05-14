import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { FaBackspace } from "react-icons/fa";
import Masonry from 'react-masonry-css';
import './Master.css';

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
        console.log('admin is true')
        }
    else if (isAdmin === true) {
        console.log('admin is true')
    }
    else {
        console.log('admin is false')
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
        console.log(e.target.files[0])
        setFileData(e.target.files[0]);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('we here2')

        //format post request to upload image
        const data = new FormData();
        console.log(fileData)
        data.append('image', fileData);

        //make a post request to upload image
        axios.post('http://localhost:8000/single', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            })
            .then(res=>{
                console.log('file sent successfully'); 
                }
            )
            .catch(err=>{
                console.log('errrrrrrr')
                console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

        //make a post request to create a new story
        
        if (fileData === undefined){
            console.log('xxxxxx no name')
            setErrors2([...errors2, "Image file is required"])
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
                    setAllStories([...allStories,res.data])
                    }
                )
                .catch(err=>{
                    console.log('we found an eroor')
                    console.log(err.response)
                    const errorResponse2 = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr2 = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse2)) { // Loop through all errors and get the messages
                        errorArr2.push(errorResponse2[key].message)
                    }
                    // Set Errors
                    console.log(5,errorArr2)
                    setErrors2(errorArr2);
                }) 
        }
    }
    

    const editHandler = (e, story) => {
        e.preventDefault()
        console.log('we are editing')
        
        //detect unchanged inputs
        let submitEditTitle;
        if (editTitle === "not-changed"){
            console.log('not')
            submitEditTitle=story.title
        }
        else{
            submitEditTitle = editTitle
        }
        let submitEditBody;
        if (editBody === "not-changed"){
            console.log('not')
            submitEditBody=story.body
        }
        else{
            submitEditBody = editBody
        }

        //validate
        if (submitEditTitle.length < 3){
            setErrors3([...errors3, "Title must be more than 3 characters"])
            return
        }
        if (submitEditBody.length < 3){
            setErrors3([...errors3, "Body must be more than 3 characters"])
            return
        }

        //make a put request to edit story
        axios.put('http://localhost:8000/api/story/'+story._id, {
            title: submitEditTitle, 
            body: submitEditBody,
            imageFile: story.imageFile
            })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setErrors3([])
                window.location.reload();
                }
            )
            .catch(err=>{
                console.log(err.response)
                const errorResponse3 = err.response.data.errors; // Get the errors from err.response.data
                const errorArr3 = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse3)) { // Loop through all errors and get the messages
                    errorArr3.push(errorResponse3[key].message)
                }
                // Set Errors
                setErrors3(errorArr3);
            }) 
            
            
    }

    const deleteThis = (e, storyId) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/story/' + storyId)
        .then(res => {
            console.log(res);
            setAllStories(allStories.filter(story => story._id !== storyId ))
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
                        </form>
        }
        else {
            addStoryForm = <></>
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
                    <h1 className='story-wrap' style={{'marginBottom':'8%','padding':'2%'}}>Highlighted Stories of Success</h1>
                    <Masonry
                        breakpointCols={{default: 3,
                                        1000: 2,
                                        700: 1}}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                                
                                allStories.map((story, index) => {
                                    console.log(story)

                                    //conditional renders for admin
                                    let deleteIcon;
                                    let editButton;
                                    if (isAdmin) {
                                        deleteIcon = <FaBackspace onClick={(e)=>deleteThis(e,story._id)} className='delete'></FaBackspace>
                                        editButton = <button className='btn btn-outline-primary shadow-none' type="button" data-bs-toggle="collapse" data-bs-target={"#edit"+index} aria-expanded="false" aria-controls={"edit"+index}>
                                                        Edit
                                                    </button>
                                    }
                                    else {
                                        deleteIcon = <></>
                                        editButton = <></>
                                    }
                                    return(
                                        <div key={index} className="card my-card">
                                            <img className="card-img-top" src={require('../assets/'+story.imageFile)} alt="Card cap"/>
                                            <div className="card-body">
                                                <div className='flex-container'>
                                                    <h5 className="card-title">{story.title}</h5>
                                                    {deleteIcon}
                                                </div>
                                                <button className='btn btn-outline-primary shadow-none' type="button" data-bs-toggle="collapse" data-bs-target={"#read-more"+index} aria-expanded="false" aria-controls={"read-more"+index}>
                                                    Read more
                                                </button>
                                                
                                                <div className="collapse" id={"read-more"+index}>
                                                    <div className="card card-body">
                                                        <pre className='card-body-wrap'><p className="card-text">{story.body}</p></pre>
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
                                }
                                )
                            }
                    </Masonry>
                    
                    {addStoryForm}
                </div>
            </div>
        </>
    )
}

export default Stories;

