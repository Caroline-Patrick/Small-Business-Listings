import { connect } from 'react-redux';
import Details from '../components/Details';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businesses: state.businesses.businesses
    }
}

export default connect(mapStateToProps)(Details)