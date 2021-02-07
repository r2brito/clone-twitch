import React from 'react'
import './RecentItem.css'

const RecentItem = ({url, title}) => {
    return (
        <div className='item'>
            <iframe 
            width="400" 
            height="235" 
            src={url} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>r2brito</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
