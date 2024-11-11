import { useContext } from "react";
import { IncomeContext } from "../context";
import { ExpenseContext } from "../context";

const [income] = useContext(IncomeContext);
const [expense] = useContext(ExpenseContext);
const t = [
  {
    id: crypto.randomUUID(),
    amount: "10",
  },
  {
    id: crypto.randomUUID(),
    amount: "30",
  },
  {
    id: crypto.randomUUID(),
    amount: "20",
  },
  {
    id: crypto.randomUUID(),
    amount: "10",
  },
];
const e = [
  {
    id: crypto.randomUUID(),
    amount: "10",
  },
  {
    id: crypto.randomUUID(),
    amount: "30",
  },
  {
    id: crypto.randomUUID(),
    amount: "10",
  },
  {
    id: crypto.randomUUID(),
    amount: "10",
  },
];

// calculate total income
const totalIncome = (incomeArrayObjecct) => {
  let totalIncomeAmount = 0;
  incomeArrayObjecct.map(
    (income) => (totalIncomeAmount += parseFloat(income.amount))
  );

  return totalIncomeAmount;
};
const incomeBalance = totalIncome(income);
console.log(incomeBalance);


// calculate total expence
const totalExpense = (expenseArrayObjecct) => {
  let totalExpenseAmount = 0;
  expenseArrayObjecct.map(
    (expense) => (totalExpenseAmount += parseFloat(expense.amount))
  );

  return totalExpenseAmount;
};
const expenseBalance = totalExpense(expense);

// providing expense value
console.log(expenseBalance);

// Total Balance

const totalBalance = (incomeTotal, expenceTotal) => {
  const balance = parseInt(incomeTotal) - parseInt(expenceTotal);
  return balance;
};
const currentBalance = totalBalance(incomeBalance, expenseBalance);
console.log(currentBalance);


export {currentBalance,incomeBalance,expenseBalance}