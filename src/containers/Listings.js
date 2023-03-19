import { connect } from 'react-redux';
import Listings from '../components/Listings';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businesses: state.businesses.businesses
    }
}

export default connect(mapStateToProps)(Listings)