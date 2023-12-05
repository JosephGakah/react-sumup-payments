import React, { useEffect } from "react";

const SumUpPaymentForm = () => {
  useEffect(() => {
    // Load SumUp SDK script
    const script = document.createElement("script");
    script.src = "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize SumUpCard.mount when the script is loaded
      window.SumUpCard.mount({
        id: "sumup-card",
        checkoutId: "your-checkout-id", // Replace with your actual checkout ID
        onResponse: function (type, body) {
          console.log("Type", type);
          console.log("Body", body);
        },
      });
    };

    // Cleanup script tag when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="sumup-card"></div>;
};

export default SumUpPaymentForm;
