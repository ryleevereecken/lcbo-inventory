import React from 'react'
import '../../css/listItem.scss'

export default ( { item } ) => {
    const {
        name,
        price_in_cents,
        image_thumb_url,
        alcohol_content
    } = item
    let price = ( price_in_cents/100 ).toFixed(2)
    const singleStyle = {
        backgroundImage: 'url(' + image_thumb_url + ')'
    }
    return ( 
        
        <div className='single-item'>
            <div className='image' style={singleStyle}></div>
            <div className='title-wrapper'>
                <div className='title'>{ name }</div>
                <div className='alcohol-content'>{ alcohol_content/100 + '%' }</div>
            </div>
            <div className='desc'>{ item.package + ' $' + price }</div>
        </div> 
    )
}