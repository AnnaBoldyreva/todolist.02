import {createStore} from "redux";



const initialState = {
    todoLists : [
        {title: "to eat", id: 0,
        books: [
            {id:0, title:'a', isDone: true},
            {id:1, title:'b', isDone: false},
            {id:2, title:'c', isDone: true}
        ]},
        {title: "to do", id: 1, books:[]},
        {title: "to watch", id: 2, books:[]}
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODOLIST':
            return {
                ...state, todoLists: [...state.todoLists, action.newTodoList]
            };
        default:
            return state
    }
};

const store = createStore(reducer);

export default store;


