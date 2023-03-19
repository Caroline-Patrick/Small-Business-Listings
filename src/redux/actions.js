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

export const fetchBusinesses = () => {
    return (dispatch) => {
        
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=${KEY}`)

        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            const action = {
                type: 'FETCH_BUSINESSES',
                value: response.Results,
            };
            dispatch(action);
        }).catch((error) => {
            // Handle the error here
            console.error('Error fetching businesses:', error);
        })
    };
};
