const TransactionsReducer = 
    (state, action) => {
        switch(action.type){
            case "Add" : {
                return [action.payload, ...state]
            }
            default:
                return state;
        }
    }

export default TransactionsReducer;