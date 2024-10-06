import Chart from "chart.js/auto";

export function setupBalanceLineChart(bank, canvasId) {
  const ctx = document.getElementById(canvasId);

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "История баланса",
          data: [],
        },
      ],
    },
  });

  const changeChart = (bank) => {
    chart.data.labels.push(new Date().toISOString());
    chart.data.datasets[0].data.push(bank.calculateBalance());
    chart.update();
  };

  bank.addOnChangeEventListener((b) => {
    changeChart(b);
  });

  changeChart(bank);
}
