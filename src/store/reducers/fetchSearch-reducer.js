const initialValue = {
    searchNews: [],
    status: [],
    isLoading: false,
}
// tadi lupa untuk return state
const fetchSearchReducer = (state=initialValue, action) => {
    switch (action.type) {
        case "FETCH_NEWS_DONE":
            return {
                ...state,
                searchNews: action.payload,
                isLoading: false,
            };
        case "FETCH_NEWS_ERROR":
            return {
                ...state,
                status: action.payload,
            };
        case "FETCH_NEWS_START":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state
    }
}

export default fetchSearchReducer