import { useState, useEffect } from "react";

const apiUrl = "https://expenses-backend-mu.vercel.app/expenses";

export function useExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let cancel = false;

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Username: "alex.predko",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!cancel) {
          setExpenses(json);
        }
      });

    return () => {
      cancel = true;
    };
  }, []);

  return expenses;
}
