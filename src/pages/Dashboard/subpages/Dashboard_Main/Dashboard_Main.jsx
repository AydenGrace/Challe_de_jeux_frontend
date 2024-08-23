import React from "react";
import style from "./Dashboard_Main.module.scss";
import { BarChart } from "@mui/x-charts";

export default function Dashboard_Main() {
  const colors = ["purple", "grey", "red"];

  return (
    <section className={`d-flex flex-column align-items-center h-100 w-100`}>
      <div className="headersep mb-10"></div>
      <h1>Panel Administrateur</h1>
      <div className={`d-flex w-100 h-100`}>
        {/* <BarChart
          slotProps={{
            // Custom loading message
            loadingOverlay: { message: "Data should be available soon." },
            // Custom message for empty chart
            noDataOverlay: { message: "Select some data to display." },
          }}
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          className={`${style.graph}`}
        /> */}
      </div>
    </section>
  );
}
