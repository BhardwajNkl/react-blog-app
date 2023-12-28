import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost } from '../ReduxFiles/BlogActions';
import { FaThumbsUp, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';
import '../styles/postDetailPage.css';

export const PostDetailPage = () => {
    const dispatch = useDispatch();

    const params = useParams();
    const { postId } = params;

    const state = useSelector((state) => state.posts);
    const postToDisplay = state.find(post => post.title === postId);

    const renderPost = () => {
        if (postToDisplay) {
            return <div>
                <div className="post-categories">Categories:
                    {
                        postToDisplay.categories.length > 0 &&
                        postToDisplay.categories.map(category => {
                            return <span key={category} className="category">{category} </span>
                        })

                    }
                    {
                        postToDisplay.categories.length === 0 && <b>none</b>
                    }
                </div>
                <div className="post-title">{postToDisplay.title}</div>
                <div className="container post-content">{postToDisplay.content}</div>
            </div>
        } else {
            return <div>Post not found</div>
        }
    }

    const renderActionButtons = () => {
        if (postToDisplay) {
            return <div style={{ textAlign: "right" }}>
                {postToDisplay.liked && <FaThumbsUp style={{ color: "lightgreen", fontSize: "24px" }} onClick={() => handleLike(postId)} />}
                {!postToDisplay.liked && <FaThumbsUp style={{ color: "black" }} onClick={() => handleLike(postId)} />}
                <NavLink className="ms-2" to={`/update/${postId}`}>
                    <FaEdit />
                </NavLink>
                <span className="ms-2" aria-label="delete"><FaTrash style={{ color: "red" }} onClick={() => { handleDelete(postId) }} /> </span>
            </div>
        } else {
            return;
        }
    }

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
        alert("Post deleted!");
    }

    const handleLike = (postId) => {
        dispatch(likePost(postId));
    }

    return (
        <React.Fragment>
            <div className="container">
                <NavLink to={"/"}> <FaArrowLeft /> Go back to home page</NavLink>
            </div>

            <div className="container mt-3">
                <div className="button-bar">{renderActionButtons()}</div>
                <div className="post-container p-5 border">{renderPost()}</div>
            </div>

        </React.Fragment>
    );
}