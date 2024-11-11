export default function Sidebar() {
  return (
    <div className="bg-white w-64 p-6 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://placekitten.com/100/100"
          alt="User avatar"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-xl font-bold">Expense Tracker</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="text-gray-600 py-2 hover:bg-gray-200 px-3 rounded-lg">
            <a href="#">Dashboard</a>
          </li>
          <li className="text-gray-600 py-2 hover:bg-gray-200 px-3 rounded-lg">
            <a href="#">Transactions</a>
          </li>
          <li className="text-gray-600 py-2 hover:bg-gray-200 px-3 rounded-lg">
            <a href="#">Reports</a>
          </li>
          <li className="text-gray-600 py-2 hover:bg-gray-200 px-3 rounded-lg">
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
