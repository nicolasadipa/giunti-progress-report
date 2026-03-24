"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, PieChart, Pie, Legend
} from "recharts";
import { Participant } from "../data/reportData";

interface RouteChartProps {
  participants: Participant[];
  totalCourses: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "white",
        border: "1px solid rgba(27,79,138,0.15)",
        borderRadius: "10px",
        padding: "10px 14px",
        boxShadow: "0 8px 24px rgba(27,79,138,0.12)",
      }}>
        <p style={{ fontWeight: 600, fontSize: "13px", color: "#0f172a", marginBottom: "4px" }}>{label}</p>
        <p style={{ fontSize: "13px", color: "#1B4F8A", fontWeight: 700 }}>{payload[0].value}% progresso</p>
      </div>
    );
  }
  return null;
};

export default function RouteChart({ participants }: RouteChartProps) {
  const chartData = participants
    .filter(p => p.progress > 0)
    .map(p => ({
      name: p.name.split(" ")[0],
      fullName: p.name,
      progress: p.progress,
    }));

  const completed = participants.filter(p => p.progress === 100).length;
  const inProgress = participants.filter(p => p.progress > 0 && p.progress < 100).length;
  const notStarted = participants.filter(p => p.progress === 0).length;

  const pieData = [
    { name: "Completati", value: completed, color: "#16a34a" },
    { name: "In corso", value: inProgress, color: "#1B4F8A" },
    { name: "Non iniziato", value: notStarted, color: "#e2e8f0" },
  ];

  const cardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid rgba(27,79,138,0.08)",
    boxShadow: "0 2px 12px rgba(27,79,138,0.06)",
  };

  return (
    // Stack vertically on mobile, 2 cols on lg
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px]" style={{ gap: "16px", alignItems: "start" }}>

      {/* Bar Chart */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
          Progresso individuale (partecipanti attivi)
        </h3>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 55 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "#64748b", fontWeight: 500 }}
                angle={-35}
                textAnchor="end"
                interval={0}
              />
              <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} domain={[0, 100]} tickFormatter={v => `${v}%`} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(27,79,138,0.04)" }} />
              <Bar dataKey="progress" radius={[5, 5, 0, 0]} maxBarSize={36}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.progress === 100 ? "#16a34a" : entry.progress >= 50 ? "#1B4F8A" : "#60a5fa"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Nessun partecipante attivo</p>
          </div>
        )}
      </div>

      {/* Pie Chart */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
          Distribuzione stato
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={82}
              paddingAngle={3}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              iconSize={7}
              formatter={(value) => (
                <span style={{ fontSize: "11px", color: "#475569", fontWeight: 500 }}>{value}</span>
              )}
            />
            <Tooltip formatter={(value) => [`${value} persone`, ""]} />
          </PieChart>
        </ResponsiveContainer>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "8px" }}>
          {pieData.map(item => (
            <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: item.color }} />
                <span style={{ fontSize: "12px", color: "#64748b" }}>{item.name}</span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
