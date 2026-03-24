"use client";

import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

export default function StatCard({ label, value, suffix = "", icon, color, delay = 0 }: StatCardProps) {
  const [displayed, setDisplayed] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      let start = 0;
      const duration = 1200;
      const step = 16;
      const increment = value / (duration / step);
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayed(value);
          clearInterval(counter);
        } else {
          setDisplayed(Math.floor(start));
        }
      }, step);
      return () => clearInterval(counter);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div
      className="card-hover"
      style={{
        background: "white",
        borderRadius: "14px",
        border: "1px solid rgba(27,79,138,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease ${delay}ms`,
        boxShadow: "0 2px 8px rgba(27,79,138,0.06)",
      }}
    >
      {/* Responsive padding via className */}
      <div className="p-4 sm:p-5" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <p className="text-xs sm:text-sm" style={{ color: "#64748b", fontWeight: 500, marginBottom: "6px", letterSpacing: "0.02em" }}>
            {label}
          </p>
          <p className="text-2xl sm:text-4xl" style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>
            {displayed}
            <span className="text-base sm:text-lg" style={{ color: "#64748b", fontWeight: 600 }}>{suffix}</span>
          </p>
        </div>
        <div
          className="w-9 h-9 sm:w-12 sm:h-12"
          style={{
            borderRadius: "10px",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
