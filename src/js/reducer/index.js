const pageCheck = ( state = '', action ) => {
    switch ( action.type ) {
        case 'GET_PAGE':
            return action.page
        default:
            return state
    }
}

export default pageCheck