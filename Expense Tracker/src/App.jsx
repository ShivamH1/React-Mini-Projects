import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    const newExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(newExpenses);
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="input-div">
        <input
          type="text"
          value={input}
          placeholder="Expense"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button onClick={addExpense}>Add Expense</button>
        <ul className="items">
          {expenses.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.amount}</span>
              <button onClick={() => deleteExpense(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
