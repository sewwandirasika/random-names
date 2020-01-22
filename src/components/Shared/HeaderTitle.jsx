import React from 'react'

function HeaderTitle(props){
    return(
        <div>
        <h1 className="display4">{props.title}</h1>
        <div className="lead">{props.tagline}</div>
        </div>
    )
}

export default HeaderTitle