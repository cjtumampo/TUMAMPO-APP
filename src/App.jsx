import React from "react";
import Employees from "./components/Employees";

function App() {
  const employeesProperty = [
    { name: "Fern", position: "Manager", salary: 1000, status: "Active" },
    { name: "Bert", position: "Developer", salary: 2000, status: "Active" },
    { name: "Cloe", position: "Designer", salary: 3000, status: "Active" },
    { name: "Jason", position: "Developer", salary: 4000, status: "Active" },
    { name: "Marry", position: "Manager", salary: 5000, status: "Active" },
    { name: "Edmond", position: "Designer", salary: 6000, status: "Active" },
    { name: "Maria", position: "Developer", salary: 7000, status: "Active" },
    { name: "Antonett", position: "Manager", salary: 8000, status: "Active" },
    { name: "Greg", position: "Designer", salary: 0, status: "Not Active" },
    { name: "Ashrin", position: "Developer", salary: 0, status: "Not Active" },
  ];

  return (
    <div className="App">
      <h1>Employee List</h1>
      <Employees employees={employeesProperty} />
    </div>
  );
}

export default App;
