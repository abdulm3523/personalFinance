import { useContext, useReducer } from "react";
import MainContainer from "./components/transection/mainContainer";
import Sidebar from "./components/sidebar";
import { IncomeContext, ExpenseContext } from "./context";
import { ExpenseReducer, IncomeReducer } from "./reducer";
function App() {
  const [income, dispatchIncome] = useReducer(IncomeReducer, []);
  const [expense, dispatchExpense] = useReducer(ExpenseReducer, []);
  return (
    <IncomeContext.Provider value={{ income, dispatchIncome }}>
      <ExpenseContext.Provider value={{ expense, dispatchExpense }}>
        <div className="min-h-screen flex">
          <Sidebar />
          <MainContainer />
        </div>
      </ExpenseContext.Provider>
    </IncomeContext.Provider>
  );
}

export default App;
