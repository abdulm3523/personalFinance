export default function BalanceCard() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-red-100 p-4 rounded-md">
        <h2 className="text-red-500 text-2xl">BDT -180000</h2>
        <p className="text-gray-600">Balance</p>
      </div>
      <div className="bg-green-100 p-4 rounded-md">
        <h2 className="text-green-500 text-2xl">BDT 600000</h2>
        <p className="text-gray-600">Total Income</p>
      </div>
      <div className="bg-pink-100 p-4 rounded-md">
        <h2 className="text-pink-500 text-2xl">BDT 780000</h2>
        <p className="text-gray-600">Total Expense</p>
      </div>
    </div>
  );
}
