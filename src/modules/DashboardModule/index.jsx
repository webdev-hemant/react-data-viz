import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "./dashboard.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 362, 235, 0.5)",
    },
    {
      label: "Dataset 4",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 12, 235, 0.5)",
    },
  ],
};

const DashboardModule = () => {
  const [activeBtn, setActiveBtn] = useState("Bar");
  return (
    <div className={styles.dashboardWrapper}>
      <h1>Select chart type</h1>
      <div className={styles.typeWrapper}>
        {["Bar", "Lines", "Graph", "Some other"].map((item, index) => {
          return (
            <button
              key={index}
              className={`${styles.chatBtn} ${
                activeBtn === item && styles.activeBtn
              }`}
              onClick={() => setActiveBtn(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};
export default DashboardModule;
