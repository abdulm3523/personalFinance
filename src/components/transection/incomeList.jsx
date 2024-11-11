import { useContext } from "react";
import { IncomeContext } from "../../context";

export default function IncomeList({onEditTransection,onDeleteTransection}) {
  const {income} = useContext(IncomeContext)
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-xl font-bold mb-4">Income</h3>
      <ul className="space-y-4">
        {
          income.map(list => (
             <li key={list.id} className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-briefcase text-green-500 mr-2"></i>
            <span>{list.category}</span>
          </div>
          <div className="flex justify-between items-center">
                <span className="text-gray-600 mr-4">{list.date}</span>
                <span className="text-green-500">BDT {list.amount}</span>
                <svg
                  onClick={()=>onEditTransection(list.id)}
              width="18"
              height="18"
              className="ml-4 mr-4 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z" />
            </svg>
                <svg
                  onClick={onDeleteTransection}
              width="18"
              height="18"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z" />
            </svg>
          </div>
        </li>
          ))
        }
       
      </ul>
    </div>
  );
}
