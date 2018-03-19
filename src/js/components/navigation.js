import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../../css/navigation.scss'

export default () => (
    <div className='navigation'>
        <a className='Previous'>
            <FontAwesome name='caret-square-o-left'
                         size='3x'/>
        </a>
        <a className='Next'>
            <FontAwesome name='caret-square-o-right'
                         size='3x'/>    
        </a>
    </div>
)