
export const fetchNewsActionHome = () => {
    return async (dispatch) => {
        const apiKey = import.meta.env.VITE_API_URL;
        dispatch({
            type:"FETCH_NEWS_START"
        })
        try {
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=news&api-key=${apiKey}`)
            const data = await res.json();

        dispatch({
            type: "FETCH_NEWS_DONE",
            payload: data.response.docs,
        })
        } catch (error) {
            dispatch({
                type:"FETCH_NEWS_ERROR",
                payload: error,
            })
        }
    }
}
