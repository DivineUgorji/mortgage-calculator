export function calcMortgage({ amount, interest, term, mortgageType }) {
  if (!amount || !interest || !term) return null;

  const principal = Number(amount);
  const monthlyRate = Number(interest) / 100 / 12;
  const numberOfPayments = Number(term) * 12;

  let monthlyPayment = 0;

  if (mortgageType === "repayment") {
    monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  } else if (mortgageType === "interest-only") {
    monthlyPayment = principal * monthlyRate;
  }

  return {
    monthlyPayment: monthlyPayment.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    totalPayment: (monthlyPayment * numberOfPayments).toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };
}
