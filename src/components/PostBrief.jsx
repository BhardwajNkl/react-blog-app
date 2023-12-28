import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/postBrief.css';

export const PostBrief = (props) => {
    return (
        <React.Fragment>
            <div className="container mb-2 border post-item">
                <NavLink to={`post/${props.post.title}`} className='nav-link'>
                    {props.post.title}
                </NavLink>
            </div>
        </React.Fragment>
    )
};