const data = [
  { month: "Сентябрь", price: 300 },
  { month: "Октябрь", price: 250 },
  { month: "Ноябрь", price: 500 },
  { month: "Декабрь", price: 450 },
];

new Chart(document.getElementById("prices"), {
  type: "line",
  data: {
    labels: data.map((row) => row.month),
    datasets: {
      data: data.map((row) => row.price),
    },
  },
});
