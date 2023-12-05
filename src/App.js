import logo from "./logo.svg";
import "./App.css";
import PaymentModal from "./components/PaymentModal";
import { createCheckout } from "./api/sumup";
import { useState } from "react";

function App() {
  const [checkoutId, setCheckoutId] = useState(null);

  const handleCreateCheckout = async () => {
    const id = await createCheckout();
    setCheckoutId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleCreateCheckout}>
          Create Checkout for 10 EUR
        </button>
        {checkoutId && <PaymentModal checkoutId={checkoutId} />}
      </header>
    </div>
  );
}

export default App;
