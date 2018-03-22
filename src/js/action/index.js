import React from 'react'

export const ActionTypes = {
    REQUEST_PAGE : 'REQUEST_PAGE',
    RECEIVE_PAGE: 'RECEIVE_PAGE'
}

export const requestPage = ( page ) => { 
    return {
        type: ActionTypes.REQUEST_PAGE, page,
        meta: {
            endpoint,
            resultKey
        }
    }
}
export const recievePage = ( page, results ) => { 
    return {
        type: ActionTypes.RECEIVE_PAGE, page, results
    }
}

