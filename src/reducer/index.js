const IncomeReducer = (state,action) => {
    switch (action.type) {
        case 'Add_Income':
            return [action.payload, ...state]
        case 'Edit_income':
            return state.map(income=> income.id === action.payload.id? action.payload : income)
        case 'Delete_Income':
            return state.filter(income=> income.id !== action.payload.id)
    
        default:
            throw new Error("Your put invalid data")
            
            break;
    }
}


const ExpenseReducer = (state, action) => {
    switch (action.type){
        case 'Add_Expense':
            return [action.payload, ...state]
        case 'Edit_Expense':
           return state.map(expense=> expense.id === action.payload.id? action.payload : expense)
        case 'Delete_Expense':
           return state.filter(expense=> expense.id !== action.payload.id)
        default :
            throw new Error('Your provide invalid data')
        break
    }
}

export {IncomeReducer,ExpenseReducer}