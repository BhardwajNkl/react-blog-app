import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { TitleContext } from "../ContextFiles/ContextProvider";
import { PostBrief } from "../components/PostBrief";
import '../styles/home.css';

export const HomePage = () => {
    const posts = useSelector((state) => state.posts);
    const { title } = useContext(TitleContext);
    return (
        <React.Fragment>
            <div className="container mt-2 header">
                <span id="title">{title}</span>
                <div className="right">
                    <NavLink to={"/new"} className="btn btn-lg">Add Post</NavLink>
                </div>
            </div>
            <div className="posts-container">
                { posts.length > 0 &&
                    posts.map(post => {
                        return (<div key={post.title}>
                            <PostBrief post={post} />
                        </div>
                        )
                    })
                }
                {
                    posts.length === 0 && <b>There is no blog!</b>
                }
            </div>
        </React.Fragment>
    );
}