// Initialize variables for income and expenses
let incomeList = [];
let expenseList = [];

// Elements for displaying totals
const totalIncomeDisplay = document.getElementById('total-income');
const totalExpensesDisplay = document.getElementById('total-expenses');
const balanceDisplay = document.getElementById('balance');

// Event listeners for buttons
document.getElementById('add-income-btn').addEventListener('click', addIncome);
document.getElementById('add-expense-btn').addEventListener('click', addExpense);

function addIncome() {
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
  
    if (description && !isNaN(amount) && amount > 0) {
      incomeList.push({ description, amount });
      updateTotals();
    }
  }
  

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
  
    if (description && !isNaN(amount) && amount > 0) {
      expenseList.push({ description, amount });
      updateTotals();
    }
  }

  function updateTotals() {
    const totalIncome = incomeList.reduce((total, item) => total + item.amount, 0);
    const totalExpenses = expenseList.reduce((total, item) => total + item.amount, 0);
    const balance = totalIncome - totalExpenses;
  
    totalIncomeDisplay.textContent = totalIncome.toFixed(2);
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
  
    updateChart(totalIncome, totalExpenses);
  }



// Function to update the chart
let chart;

function updateChart(totalIncome, totalExpenses) {
  const chartCanvas = document.getElementById('chart'); // Get the canvas element

  if (!chartCanvas.getContext) {
    console.error("Canvas not supported in this browser.");
    return;
  }

  const ctx = chartCanvas.getContext('2d');

  // Destroy previous chart if it exists
  if (chart) {
    chart.destroy();
  }

  // Create the chart
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expenses'],
      datasets: [{
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#4caf50', '#f44336'],
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  });
}
updateChart(500,300);
