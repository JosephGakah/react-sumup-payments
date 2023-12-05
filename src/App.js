import logo from "./logo.svg";
import "./App.css";
import PaymentModal from "./components/PaymentModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PaymentModal />
      </header>
    </div>
  );
}

export default App;
