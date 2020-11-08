import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <h2>{title}</h2>
        </div>
    )
}
