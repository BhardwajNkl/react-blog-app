import React from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from '../ReduxFiles/BlogActions';
import { FaArrowLeft } from "react-icons/fa";

export const EditPostPage = () => {
    const dispatch = useDispatch();

    const { postId } = useParams();

    const posts = useSelector((state) => state.posts);
    const postToUpdate = posts.find((post) => post.title === postId);

    // converting the categories array to string to fill in the input box
    const [formData, setFormData] = useState({ ...postToUpdate, categories: postToUpdate.categories + "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updatePost(postId, formData));
        alert("Post updated!");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    return (
        <React.Fragment>
            <div className="container">
                <NavLink to={`/post/${postId}`}> <FaArrowLeft /> Go back</NavLink>
            </div>

            <div className="container p-4 mt-3 border">
                <form onSubmit={handleSubmit}>
                    <span>Post title</span><br></br>
                    <input
                        type="text" name="title" disabled className="form-control"
                        value={formData.title}
                    />
                    <br></br>
                    <span>Categories [comma seperated]</span><br></br>
                    <input
                        type="text" name="categories" className="form-control"
                        value={formData.categories} onChange={handleInputChange}
                    /><br></br>
                    <span>Post content</span><br></br>
                    <textarea
                        type="text" name="content" rows="10" className="form-control mb-2" required
                        value={formData.content} onChange={handleInputChange}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger ms-4">
                        <NavLink style={{ textDecoration: "none", color: "white" }} to={`/post/${postId}`}>Cancel</NavLink>
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}