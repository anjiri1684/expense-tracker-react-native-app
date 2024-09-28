import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpense() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpense;
