import { useContext, useState } from "react";
import { ExpenseContext, IncomeContext } from "../../context";

const incomeCategory = ['Salary','Bonus','Freelancing','Extra Income']
const expenseCategory = ['Education','Shopping','Food','Travel']
export default function AddEditTransection({onAddTransection}) {
  const [initalValue,setValue] = useState({
    id: crypto.randomUUID(),
    typeOfTransection: 'income',
    category:'',
    amount: '',
    date:''
    
  })

    const handelOnChange = (e) => {
    e.preventDefault()
    // const date = e.target.name === 'date'? formatDate(e.target.value) : ''
    setValue({
      ...initalValue,
      [e.target.name]: e.target.value,
    })
  }

  
  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
     
      <h3 className="text-xl font-bold mb-4">Add Transaction</h3>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="type" className="block text-gray-600">
            Type
          </label>
          <select name="typeOfTransection" onChange={handelOnChange} id="type" className="w-full p-2 border rounded-md">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-600">
            Category
          </label>
          <select onChange={handelOnChange} name="category" id="category" className="w-full p-2 border rounded-md">
            {
              initalValue.typeOfTransection === 'income'?(incomeCategory.map((list,index)=><option key={index} value={list}>{list}</option>)):(expenseCategory.map(list=><option value={list}>{list}</option>))
            }

          </select>
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-600">
            Amount
          </label>
          <input
            name="amount"
            value={initalValue.amount}
            onChange={handelOnChange}
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
            name="date"
            value={initalValue.date}
            onChange={handelOnChange}
            type="date"
            id="date"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <button onClick={()=>onAddTransection(initalValue)} className="bg-teal-500 text-white mt-4 px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
}
