import AddEditTransection from "./add-EditTransition";
import BalanceCard from "./balanceCard";
import ExpenceList from "./ExpenseList";
import IncomeList from "./incomeList";
import { IncomeContext } from "../../context";
import { ExpenseContext } from "../../context";
import { useContext } from "react";
export default function MainContainer() {

  const { income, dispatchIncome } = useContext(IncomeContext);
  const { expense, dispatchExpense } = useContext(ExpenseContext);
  

  const handelOnAddTransection = (initalValue) => {
    // e.preventDefault()
console.log('clicked')
    if (initalValue.typeOfTransection === 'income') {
      
      dispatchIncome({
        type: 'Add_Income',
        payload:initalValue
      })
    } else if (initalValue.typeOfTransection === 'expense'){
       dispatchExpense({
        type: 'Add_Expense',
        payload:initalValue
      })
    }
  }

  const handelOnEditTransection = (id) => {
    
  }

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
          <i className="fas fa-download mr-2"></i> Get App
        </button>
      </div>

      <BalanceCard />
      <AddEditTransection onAddTransection={handelOnAddTransection} onEditTransection={handelOnEditTransection} />
      <div className="grid grid-cols-2 gap-4">
        <IncomeList onEditTransection={handelOnEditTransection} />
        <ExpenceList />
      </div>
    </div>
  );
}
