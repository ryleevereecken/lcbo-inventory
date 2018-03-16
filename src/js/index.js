import AppContainer from './containers/getPageContainer.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducer'

const store = createStore( Reducer )

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
)