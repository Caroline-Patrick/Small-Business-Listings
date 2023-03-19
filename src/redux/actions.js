export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

// export const fetchBusinesses = () => {
//     const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
//     return (dispatch) => {
        
//         fetch(`src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=&v=weekly`)

//         .then((res) => res.json())
//         .then((response) => {
//             console.log(response)
//             const action = {
//                 type: 'FETCH_BUSINESSES',
//                 value: response.Results,
//             };
//             dispatch(action);
//         }).catch((error) => {
//             // Handle the error here
//             console.error('Error fetching businesses:', error);
//         })
//     };
// };
