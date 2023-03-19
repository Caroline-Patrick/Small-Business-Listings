import { connect } from 'react-redux';
import LoggedInListings from '../components/LoggedInListings';

import {removeBusiness} from '../redux/actions'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businesses: state.businesses.businesses

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInListings)