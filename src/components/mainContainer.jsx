import BalanceCard from "./transection/balanceCard";
import ExpenceList from "./transection/ExpenseList";
import IncomeList from "./transection/incomeList";

export default function MainContainer() {
  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
          <i className="fas fa-download mr-2"></i> Get App
        </button>
      </div>

      <BalanceCard />
      <div className="grid grid-cols-2 gap-4">
        <IncomeList />
        <ExpenceList />
      </div>
    </div>
  );
}
