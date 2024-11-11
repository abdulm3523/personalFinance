export default function AddEditTransection() {
  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
      <h3 className="text-xl font-bold mb-4">Add Transaction</h3>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="type" className="block text-gray-600">
            Type
          </label>
          <select id="type" className="w-full p-2 border rounded-md">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-600">
            Category
          </label>
          <select id="category" className="w-full p-2 border rounded-md">
            <option value="Education">Education</option>
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-600">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-gray-600">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <button className="bg-teal-500 text-white mt-4 px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
}
