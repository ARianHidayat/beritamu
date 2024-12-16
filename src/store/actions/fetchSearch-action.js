
export const fetchSearchAction = (param) => {
    return async (dispatch) => {
        const apiKey = import.meta.env.VITE_API_URL;

        dispatch({
            type:"FETCH_NEWS_START"
        })
        try {
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${param}&api-key=${apiKey}`)
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

// return async (dispatch) => {
//     dispatch({
//         type:"FETCH_NEWS_START"
//     })
//     try {
//         const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=news&api-key=vS9AzWGFx1b7LnFE40ap8NJwDG8OPNF4')
//         const data = await res.json();

//     dispatch({
//         type: "FETCH_NEWS_DONE",
//         payload: data.response.docs,
//     })
//     } catch (error) {
//         dispatch({
//             type:"FETCH_NEWS_ERROR",
//             payload: error,
//         })
//     }
// }