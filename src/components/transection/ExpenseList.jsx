export default function ExpenceList() {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-xl font-bold mb-4">Expense</h3>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-utensils text-pink-500 mr-2"></i>
            <span>Food</span>
          </div>
          <div>
            <span className="text-gray-600 mr-4">15 January 2024</span>
            <span className="text-pink-500">BDT 780000</span>
            <i className="fas fa-edit text-gray-600 mx-2"></i>
            <i className="fas fa-trash-alt text-gray-600"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
