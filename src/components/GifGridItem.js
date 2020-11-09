import React from 'react'


export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card" style={{backgroundImage: `url(${url})`}}>
        <p className="cardtitle">
            {title}
        </p>
        {/* <img
            className="cardmedia"
            src={url}
            title={title}
            alt={title}
        /> */}
        </div>
    )
}







