const pages = ( pages = {}, action ) => {
    switch ( action.type ) {
        case 'REQUEST_PAGE':
            return {
                ...pages,
                [action.page]: {
                    ids: [],
                    fetching: true
                }
            }
        case 'RECEIVE_PAGE':
            return {
                ...pages,
                [action.page]: {
                    ids: action.page.results.filter( single => single.id ),
                    fetching: false
                }
            }
        default:
            return pages
    }
}

const currentPage = (currentPage = 1, action = {}) => {
    return action.type == 'REQUEST_PAGE' ? action.page : currentPage
}

export default pageCheck