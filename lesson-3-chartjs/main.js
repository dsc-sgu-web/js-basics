import "./style.css";
import Chart from "chart.js/auto";
import { getData } from "./data";

const data = getData();

new Chart(document.getElementById("prices").getContext("2d"), {
  type: "line",
  data: {
    labels: data.map((row) => row.month),
    datasets: [
      {
        label: "Цена",
        data: data.map((row) => row.price),
      },
    ],
  },
});
