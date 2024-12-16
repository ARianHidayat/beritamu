export const savedAction = (param) => {
    return (dispatch) => {
        dispatch({
            type: "SAVED",
            payload: param,
        })
    }
}