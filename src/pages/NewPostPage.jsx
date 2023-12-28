import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../ReduxFiles/BlogActions";
import {FaArrowLeft} from 'react-icons/fa';

export const NewPostPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.posts);

    const [formData, setFormData] = useState({
        "title": "",
        "categories": "",
        "content": ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Post is added only if the title is unique.
        const isDuplicate = state.find(post => post.title === formData.title);
        if(isDuplicate){
            alert("Error! Post with same title exists!")
        } else{
            dispatch(createPost(formData));
            alert("Post added!");
        }
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData(
            {
                ...formData,
                [name]:value
            }           
        )
    }

    return (
        <React.Fragment>
            <div className="container">
                <NavLink to={"/"}> <FaArrowLeft /> Go back to home page</NavLink>
            </div>

            <div className="container p-5 border">
                <form onSubmit={handleSubmit}>
                    <span>Post title *</span><br></br>
                    <input
                        type="text" name="title" className="form-control" required
                        value={formData.title} onChange={handleInputChange}
                    />
                    <br></br>
                    <span>Categories [comma seperated]</span><br></br>
                    <input
                        type="text" name="categories" className="form-control"
                        value={formData.categories} onChange={handleInputChange}
                    /><br></br>
                    <span>Post content *</span><br></br>
                    <textarea
                        type="text" name="content" rows="10" className="form-control mb-2" required
                        value={formData.content} onChange={handleInputChange}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger ms-4">
                    <NavLink style={{textDecoration:"none", color:"white"}} to={"/"}>Cancel</NavLink>
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}