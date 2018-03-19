import React from 'react'
import FontAwesome from 'react-fontawesome'

//--styles--//
import '../../css/header.scss'

export default ( { title, icon } ) => (
    <div className="header">
        <FontAwesome name={ icon }
                     size='2x'
                     className='header-icon' />
        <h1 className="title">{ title }</h1>

        <div className="navbar">
            <a>Home</a>
            <a>Deals</a>
        </div>

    </div>
)