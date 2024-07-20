import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Line,
  YAxis,
} from "recharts";

const Charsts = () => {
  return (
    <div className="mt-4">
      <div
        class="card mb-5 shadow mb-5 bg-body rounded"
        style={{ width: "auto", border: "none" }}
      >
        <div class="card-body">
          <h5 class="card-title" style={{ fontSize: "1rem" }}>
            <b>Data Visualization</b>
          </h5>
          <span className="d-flex align-items-end flex-column ">
            <p className="w-25 m-0">
              <sapn
                className="mx-1"
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#FFEF00",
                  display: "inline-block",
                  padding: "0.3rem",
                  marginTop: "0.3rem",
                }}
              ></sapn>
              Varified Templates
            </p>

            <p className="w-25 m-0">
              <sapn
                className="mx-1"
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#663399",
                  display: "inline-block",
                  padding: "0.1rem",
                  marginTop: "0.3rem",
                }}
              ></sapn>
              Total Contacts
            </p>

            <p className="w-25">
              <sapn
                className="mx-1"
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00FFBF",
                  display: "inline-block",
                  padding: "0.3rem",
                  marginTop: "0.3rem",
                }}
              ></sapn>
              New Added Contacts
            </p>
          </span>
          <p class="card-text">
            <AreachartChart className="aspect-[9/4]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charsts;

function AreachartChart(props) {
  const data = [
    { month: "January", Varified_Templates: 0, Total_Contacts: 90, New_added_contacts: 10 },
    { month: "February", Varified_Templates: 1, Total_Contacts: 120,New_added_contacts: 50 },
    { month: "March", Varified_Templates: 2, Total_Contacts: 200, New_added_contacts: 100 },
    { month: "April", Varified_Templates: 3, Total_Contacts: 300 ,New_added_contacts: 30 },
    { month: "May", Varified_Templates: 4, Total_Contacts: 4000, New_added_contacts: 90 },
    { month: "June", Varified_Templates: 5, Total_Contacts: 5000, New_added_contacts: 100 },
  ];

  return (
    <div {...props}>
      <LineChart width={775} height={225} data={data}>
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Varified_Templates"
          stroke="#FFEF00"
          fillOpacity={0.8}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Total_Contacts"
          stroke="#663399"
          fillOpacity={0.8}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="New_added_contacts"
          stroke="#00FFBF"
          fillOpacity={0.8}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}
