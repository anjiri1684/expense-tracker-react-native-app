import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
