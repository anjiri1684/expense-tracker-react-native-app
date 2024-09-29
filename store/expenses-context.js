import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Gas oil",
    amount: 100.0,
    date: new Date("2024-06-19"),
  },
  {
    id: "e2",
    description: "Rent",
    amount: 200,
    date: new Date("2024-06-20"),
  },
  {
    id: "e3",
    description: "Food",
    amount: 50.0,
    date: new Date("2024-06-21"),
  },
  {
    id: "e4",
    description: "Transportation",
    amount: 100.0,
    date: new Date("2024-06-22"),
  },
  {
    id: "e5",
    description: "Shopping",
    amount: 150.0,
    date: new Date("2024-06-23"),
  },
  {
    id: "e6",
    description: "Utilities",
    amount: 120.0,
    date: new Date("2024-06-24"),
  },
  {
    id: "e7",
    description: "Gym Membership",
    amount: 75.0,
    date: new Date("2024-06-25"),
  },
  {
    id: "e8",
    description: "Car Maintenance",
    amount: 300.0,
    date: new Date("2024-06-26"),
  },
  {
    id: "e9",
    description: "Internet Bill",
    amount: 60.0,
    date: new Date("2024-06-27"),
  },
  {
    id: "e10",
    description: "Medical Expenses",
    amount: 180.0,
    date: new Date("2024-06-28"),
  },
  {
    id: "e11",
    description: "Dining Out",
    amount: 90.0,
    date: new Date("2024-06-29"),
  },
  {
    id: "e12",
    description: "Entertainment",
    amount: 50.0,
    date: new Date("2024-06-30"),
  },
  {
    id: "e13",
    description: "Gifts",
    amount: 200.0,
    date: new Date("2024-07-01"),
  },
  {
    id: "e14",
    description: "Clothing",
    amount: 130.0,
    date: new Date("2024-07-02"),
  },
  {
    id: "e15",
    description: "Vacation",
    amount: 800.0,
    date: new Date("2024-07-03"),
  },
  {
    id: "e16",
    description: "Household Items",
    amount: 90.0,
    date: new Date("2024-07-04"),
  },
  {
    id: "e17",
    description: "Subscription Services",
    amount: 40.0,
    date: new Date("2024-07-05"),
  },
  {
    id: "e18",
    description: "Pet Supplies",
    amount: 70.0,
    date: new Date("2024-07-06"),
  },
  {
    id: "e19",
    description: "Parking Fees",
    amount: 15.0,
    date: new Date("2024-07-07"),
  },
  {
    id: "e20",
    description: "Charity",
    amount: 100.0,
    date: new Date("2024-07-08"),
  },
  {
    id: "e21",
    description: "School Supplies",
    amount: 50.0,
    date: new Date("2024-07-09"),
  },
  {
    id: "e22",
    description: "Fuel",
    amount: 45.0,
    date: new Date("2024-07-10"),
  },
  {
    id: "e23",
    description: "Insurance",
    amount: 250.0,
    date: new Date("2024-07-11"),
  },
  {
    id: "e24",
    description: "Books",
    amount: 35.0,
    date: new Date("2024-07-12"),
  },
  {
    id: "e25",
    description: "Snacks",
    amount: 20.0,
    date: new Date("2024-07-13"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];

    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payLoad.id
      );
      const updatebleExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatebleExpense, ...action.payLoad.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD_EXPENSE", payLoad: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE_EXPENSE", payLoad: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE_EXPENSE",
      payLoad: { id: id, data: expenseData },
    });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
