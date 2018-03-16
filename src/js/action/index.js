import React from 'react'

export const ActionTypes = {
    GET_PAGE : 'GET_PAGE'
}

export const getPage = ( page ) => { 
    return {
        type: ActionTypes.GET_PAGE, page
    }
}