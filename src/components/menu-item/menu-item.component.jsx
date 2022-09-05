import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, id, size, route }) => {
    const navigate = useNavigate();
    return (

        <div className={`menu-item ${size}`} onClick={() => {
            navigate(`shop/${route}`)
        }} >

            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>

        </div>


    )
}

export default MenuItem;