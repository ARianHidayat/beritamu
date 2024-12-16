const initialValue = {
    dataNews: [],
    status: [],
    isLoading: false,
}
// tadi lupa untuk return state
const fetchNewsProgamReducer = (state=initialValue, action) => {
    switch (action.type) {
        case "FETCH_NEWS_DONE":
            return {
                ...state,
                dataNews: action.payload,
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

export default fetchNewsProgamReducer