import React from 'react'
import ListItem from './listItem'

export default ( { page } ) => {
    console.log(page)
    if ( page ) {
        return page.result.map( ( single, index ) => <ListItem item={ single } key={ index } /> )
    }
    
    return ( null ) 
}