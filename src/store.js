import {createStore} from "redux";


const initialState = {
    todoLists : [
        {title: "to eat", id: 0},
        {title: "to do", id: 1},
        {title: "to watch", id: 2}
    ]
};

const reducer = (state = initialState, action) => {
    return state
};

const store = createStore(reducer);

export default store;


