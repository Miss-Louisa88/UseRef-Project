import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "new") return { money: state.money + 100 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return state;
};

function App() {
  const initialState = { money: 1000 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <div className="wallet-card">
        <h1>💼 Wallet Balance</h1>
        <p className="amount">${state.money}</p>
        <div className="button-group">
          <button
            onClick={() => dispatch({ type: "new" })}
            className="btn btn-add"
          >
            💰 A New Client
          </button>
          <button
            onClick={() => dispatch({ type: "fuel" })}
            className="btn btn-subtract"
          >
            ⛽ Refill the Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
