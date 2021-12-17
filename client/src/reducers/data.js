function dataHandling(state: "default", action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return state;
        case 'CREATE_DATA':
            return state;
        default:
            return state;
    }
}

export default dataHandling;