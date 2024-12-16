import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

import savedReducer from "./reducers/saved-reducer"
import fetchNewsReducer from "./reducers/fetchNews-reducer";
import fetchNewsIndonesiaReducer from "./reducers/fetchIndonesiaNews-reducer";
import fetchNewsProgamReducer from "./reducers/fetchProgamNews-reducer";
import fetchSearchReducer from "./reducers/fetchSearch-reducer";

const rootReducer = combineReducers({
    saved: savedReducer,
    news: fetchNewsReducer,
    indonesiaNews: fetchNewsIndonesiaReducer,
    progamNews: fetchNewsProgamReducer,
    searchNews: fetchSearchReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;



// import {createStore} from 'redux';

// const initialState = {
//     store : [
//         {source : {platform: "Cnnindonesia.com", link:"News Page"}, title: "Kenali Perbedaan Purifier, Humidifier, dan difuser, 3 alat yang populer saat pandemi", description:"Dimasa pandemi Covid, kualitas udara menjadi salah satu aspek yang sangat diperhatikan."},
//         {source : {platform: "Kompas.com", link:"News Page"}, title: "Asteroid 3 Kali patung Liberty Bakal Melintas dekat Bumi", description:"Sebuah asteroid diperkirakan berukuran tiga kali lipat patung liberty akan meluncur melewati bumi saat peristiwa ekuinoks"},
//         {source : {platform: "Detik.com", link:"News Page"}, title: "10 top API security testing tools", description:"application progamming interfaces (API's are a critical part of most modern programs and applications. In fact, both cloud deployments and mobile."},
//     ],
//     news : "getData",
//     dummy : [],
// }



// // https://jsonplaceholder.typicode.com/users/1
// const savedReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "SAVED":
//             return{store: action.payload}
//         default:
//             return state
//     }
// }

// const store = createStore(savedReducer)

// export default store;