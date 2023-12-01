import "./styles.css";
import { ExpensesTable } from "./ExpensesTable";
import { useExpenses } from "./useExpenses";

export default function App() {
  const expenses = useExpenses();

  return (
    <div>
      <h1>Expenses</h1>
      <ExpensesTable expenses={expenses} />
    </div>
  );
}
