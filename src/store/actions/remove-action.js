export const removeAction = (param) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE",
            payload: param,
        })
    }
}