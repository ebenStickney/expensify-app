const filtersReducerDefaults = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filtersReducerDefaults, action) => {
    switch (action.type) {
        case "SET_TEXT":
        return {
            ...state, 
            text: action.text
        };
        break;
        case "SORT_BY_DATE":
        return {
            ...state, 
            sortBy: 'date'
        };
        break;
        case "SORT_BY_AMOUNT":
        return {
            ...state, 
            sortBy: 'amount'
        };
        break;
        case "SET_START_DATE":
        return {
            ...state,
            startDate: action.startDate
        };
        break;
         case "SET_END_DATE":
        return {
            ...state,
            endDate: action.endDate
        };
        break;
        default: 
         return state;
    }
};