import {createStore} from "redux";
import ConnectedApp from "./ConnectedApp";
ConnectedApp

const initialState = {
    todolists : []
};

const reducer = (state = initialState, action) => {
    return state
};

const store = createStore(reducer);

export default store;


