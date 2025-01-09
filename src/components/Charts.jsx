import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // This is the element that needs to be registered for Pie chart
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the components needed for the Pie chart
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Charts = ({ expenses }) => {
  const categories = ["Food", "Travel", "Bills", "Other"];
  const data = categories.map(
    (cat) =>
      expenses
        .filter((expense) => expense.category === cat)
        .reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
  );

  return (
    <div className="charts">
      <h2>Expense Breakdown</h2>
      <Pie
        data={{
          labels: categories,
          datasets: [
            {
              data: data,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
            },
          ],
        }}
      />
    </div>
  );
};

export default Charts;
