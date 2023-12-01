import { formatDateTimeString, toTitleCase } from "./utils";

export function ExpensesTable({ expenses }) {
  return (
    <table>
      <ExpensesTableHeader />
      <ExpensesTableBody expenses={expenses} />
    </table>
  );
}

function ExpensesTableHeader() {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Merchant</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
  );
}

function ExpensesTableBody({ expenses }) {
  return (
    <tbody>
      {expenses.map((e) => (
        <tr key={e.id}>
          <td>{formatDateTimeString(e.date)}</td>
          <td>{toTitleCase(e.merchant)}</td>
          <td>£{e.amount.toFixed(2)}</td>
          <td>{toTitleCase(e.category)}</td>
          <td>{toTitleCase(e.description)}</td>
          <td>{toTitleCase(e.status)}</td>
        </tr>
      ))}
    </tbody>
  );
}
