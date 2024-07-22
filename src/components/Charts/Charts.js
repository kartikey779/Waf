import React from "react";
import {
  BarChart,
  Bar,
  Legend,
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
        class="card mb-2  rounded"
        style={{ width: "26rem", border: "none" }}
      >
        <div class="card-body p-1">
          <h5 class="card-title" style={{ fontSize: "1rem" }}>
            <b>Data Visualization</b>
          </h5>
          <p class="card-text d-flex">
            <AreachartChart className="aspect-[9/4]" />
            <AreaChart className="aspect-[9/4] mx-5" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charsts;

function AreachartChart(props) {
  const data = [
    { month: "January", Varified_Templates: 0, Total_Contacts: 0, New_added_contacts: 10 },
    { month: "February", Varified_Templates: 1, Total_Contacts: 10,New_added_contacts: 50 },
    { month: "March", Varified_Templates: 2, Total_Contacts: 60, New_added_contacts: 100 },
    { month: "April", Varified_Templates: 3, Total_Contacts: 160 ,New_added_contacts: 30 },
    { month: "May", Varified_Templates: 4, Total_Contacts: 190, New_added_contacts: 90 },
    { month: "June", Varified_Templates: 5, Total_Contacts: 280, New_added_contacts: 280 },
  ];

  return (
    <div {...props}>
      
      <LineChart width={400} height={200} data={data}>
      <Legend/>
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3"  />
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
          stroke="rgba(0, 66, 37, 0.1)"
          fillOpacity={0.8}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Total_Contacts"
          stroke="rgba(0, 66, 37, 1)"
          fillOpacity={0.8}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="New_added_contacts"
          stroke="rgba(0, 66, 37, 0.5)"
          fillOpacity={0.8}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}

function AreaChart(props) {
  const data = [
    { month: "January", Varified_Templates: 0, Total_Contacts: 0, New_added_contacts: 10 },
    { month: "February", Varified_Templates: 1, Total_Contacts: 10, New_added_contacts: 50 },
    { month: "March", Varified_Templates: 2, Total_Contacts: 60, New_added_contacts: 100 },
    { month: "April", Varified_Templates: 3, Total_Contacts: 160, New_added_contacts: 30 },
    { month: "May", Varified_Templates: 4, Total_Contacts: 190, New_added_contacts: 90 },
    { month: "June", Varified_Templates: 5, Total_Contacts: 280, New_added_contacts: 280 },
  ];

  return (
    <div {...props}>
      <BarChart width={400} height={200} data={data}>
      <Legend/>
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        
        <Bar dataKey="Varified_Templates" fill="rgba(0, 66, 37, 0.1)" />
        <Bar dataKey="Total_Contacts" fill="rgba(0, 66, 37, 1)" />
        <Bar dataKey="New_added_contacts" fill="rgba(0, 66, 37, 0.5)" />
      </BarChart>
    </div>
  );
}
