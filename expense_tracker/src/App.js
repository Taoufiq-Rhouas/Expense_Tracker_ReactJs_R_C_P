import { useState } from "react";
import Balance from "./components/Balance";
import InExList from "./components/InExList";
import Transactions from "./components/Transactions";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1, label: 'Rent', amount: '300'
    },
    {
      id: 2, label: 'Phone repair', amount: '30'
    }
  ])

  const [incomes, setIncomes] = useState([
    {
      id: 1, label: 'Salary', amount: '8000'
    }
  ])
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body" >
              <Balance balance="8000" />
              <Transactions />
              <InExList incomes={incomes} expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
