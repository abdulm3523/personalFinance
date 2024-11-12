import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ExpenseContext, IncomeContext } from "../../context";
import AddEditTransection from "./add-EditTransition";
import BalanceCard from "./balanceCard";
import ExpenceList from "./ExpenseList";
import IncomeList from "./incomeList";
export default function MainContainer() {
  const { income, dispatchIncome } = useContext(IncomeContext);
  const { expense, dispatchExpense } = useContext(ExpenseContext);
  const [editMode, setEditMode] = useState(false);
  const [transectionToUpdate, setTransectionToUpdate] = useState("");

  const handelOnAddTransection = (initalValue, resetForm) => {
    // e.preventDefault()
    console.log("clicked");
    if (
      initalValue.category !== "" &&
      initalValue.amount !== "" &&
      initalValue.date !== ""
    ) {
      if (initalValue.typeOfTransection === "income") {
        dispatchIncome({
          type: "Add_Income",
          payload: initalValue,
        });
        toast.success("Transection added succesfully");
      } else if (initalValue.typeOfTransection === "expense") {
        dispatchExpense({
          type: "Add_Expense",
          payload: initalValue,
        });
        toast.success("Transection added succesfully");
      }
      resetForm();
    } else {
      toast.warn("Fillup the data");
    }
  };

  const handelOnEditTransection = (transectionDate) => {
    setEditMode(true);
    setTransectionToUpdate(transectionDate);
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
          <i className="fas fa-download mr-2"></i> Get App
        </button>
      </div>
      {console.log("edit from main", transectionToUpdate)}
      <BalanceCard />
      <AddEditTransection
        onAddTransection={handelOnAddTransection}
        onUdateTransection={transectionToUpdate}
        onEditMode={editMode}
      />
      <div className="grid grid-cols-2 gap-4">
        <IncomeList onEditTransection={handelOnEditTransection} />
        <ExpenceList />
      </div>
    </div>
  );
}
