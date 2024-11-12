import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/sidebar";
import MainContainer from "./components/transection/mainContainer";
import { ExpenseContext, IncomeContext } from "./context";
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
        <ToastContainer />
      </ExpenseContext.Provider>
    </IncomeContext.Provider>
  );
}

export default App;
