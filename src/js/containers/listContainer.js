import { connect } from 'react-redux'
import List from '../components/list.js'
   
const mapStateToProps = ( state, props )  => ({
    page: state
})

export default connect(
    mapStateToProps,
    null
)( List )