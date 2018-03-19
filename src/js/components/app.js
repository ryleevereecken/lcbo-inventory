import { getLcboPage } from '../modules.js'
import React from 'react'
import Header from './header'
import ListContainer from '../containers/listContainer.js'
import { getPage } from '../action'
import Navigation from './navigation'

class App extends React.Component {
    componentDidMount() {
        const {
            dispatch
        } = this.props
        
        getLcboPage().then( body => {
            body.json().then( results => {
                dispatch( getPage( results ) )
            })
        })
    }
    render() { 
        return(
            <div className="main">
                <Header title='LCBO Inventory' icon='beer'/>
                <ListContainer />
                <Navigation />
            </div>
        )
    }   
}

export default App