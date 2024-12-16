const initialState = {
    store : [],
    news : "getData",
    // dummy : [],
}



// https://jsonplaceholder.typicode.com/users/1
const savedReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SAVED": {
            const isDouble = state.store.find(
                (product) => product._id === action.payload._id
            );
            if(isDouble){
                return state;
            }
            return{
                ...state,
                store:[...state.store,action.payload]
            };
        }
        case "REMOVE": {
            // Filter untuk menghapus produk berdasarkan _id
            const updatedStore = state.store.filter(
                (product) => product._id !== action.payload._id
            );

            return {
                ...state,
                store: updatedStore,
            };
        }
        default:
            return state
    }
}

export default savedReducer;