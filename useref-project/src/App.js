import "./App.css";
import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "new") return { money: state.money + 100 };
  if (action.type === "fuel") return { money: state.money - 50 };
};

function App() {
  const initialState = { money: 1000 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1> Wallet: {state.money}</h1>
      <button onClick={() => dispatch({ type: "new" })}>A New Client</button>
      <button onClick={() => dispatch({ type: "fuel" })}>
        Refill the wallet
      </button>
    </div>
  );
}

export default App;
