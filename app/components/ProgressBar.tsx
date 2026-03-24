"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  height?: number;
  showLabel?: boolean;
  animated?: boolean;
}

function getProgressColor(value: number): string {
  if (value === 100) return "linear-gradient(90deg, #16a34a, #22c55e)";
  if (value >= 50) return "linear-gradient(90deg, #1B4F8A, #0EA5E9)";
  if (value >= 20) return "linear-gradient(90deg, #1B4F8A, #60a5fa)";
  if (value > 0) return "linear-gradient(90deg, #64748b, #94a3b8)";
  return "linear-gradient(90deg, #e2e8f0, #e2e8f0)";
}

export default function ProgressBar({ value, height = 8, showLabel = false, animated = true }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
      <div
        style={{
          flex: 1,
          height: `${height}px`,
          background: "#e2e8f0",
          borderRadius: `${height}px`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animated ? `${width}%` : `${value}%`,
            background: getProgressColor(value),
            borderRadius: `${height}px`,
            transition: animated ? "width 1.4s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          }}
        />
      </div>
      {showLabel && (
        <span style={{ fontSize: "13px", fontWeight: 700, color: "#475569", minWidth: "38px", textAlign: "right" }}>
          {value}%
        </span>
      )}
    </div>
  );
}
