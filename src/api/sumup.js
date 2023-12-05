export const createCheckout = async () => {
  try {
    const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
      method: "POST",
      headers: {
        Authorization: `Bearer sup_sk_PpX1rsklEdI23gj2HP0t65inwiWkCH7xg`, // Replace with your SumUp API key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkout_reference: "CO746458", // Replace with your unique reference
        amount: 10,
        currency: "EUR",
        pay_to_email: "d55c40127278470ba059741cc0be81f5@developer.sumup.com",
        description: "Sample one-time payment",
      }),
    });

    const data = await response.json();
    console.log("RESPONSE", data);

    return data.id; // Return the checkout ID
  } catch (error) {
    console.error("Error creating checkout:", error);
    // Handle the error appropriately
  }
};
