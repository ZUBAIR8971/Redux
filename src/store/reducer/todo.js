const initState = {
    list: [],
};

const tode = (state = initState, action) => {
    if(action.type === 'ADD_TODO'){
        return {
            ...state,
            list: [...state.list, action.payload]
        };
    } else if(action.type === 'LIST_TODO'){
        return {
            ...state,
            list: action.payload
        };
    } else {
        return state;
    }
};

export default tode;