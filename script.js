const form = document.querySelector('form');
const amountSelect = document.getElementById('amount');
const paymentsSelect = document.getElementById('payments');
const totalCostLabel = document.getElementById('total-cost-label');
const monthlyPaymentLabel = document.getElementById('monthly-payment-label');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = parseInt(amountSelect.value);
  const payments = parseInt(paymentsSelect.value);
  const interestRate = 0.35;
  const interest = amount * interestRate * payments / 12;
  const totalCost = amount + interest;
  const monthlyPayment = totalCost / payments;

  totalCostLabel.innerHTML = `<strong>Costo total:</strong> $${totalCost.toFixed(2)}`;
  monthlyPaymentLabel.innerHTML = `<strong>Monto por cuota:</strong> $${monthlyPayment.toFixed(2)}`;
  monthlyPaymentLabel.style.display = 'block';
});
