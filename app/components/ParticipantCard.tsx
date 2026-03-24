"use client";

import { Participant } from "../data/reportData";
import ProgressBar from "./ProgressBar";

interface ParticipantCardProps {
  participant: Participant;
  totalCourses: number;
  rank: number;
  delay?: number;
}

function getStatusBadge(progress: number) {
  if (progress === 100) return { label: "Completato", color: "#16a34a", bg: "#dcfce7" };
  if (progress >= 50) return { label: "In corso", color: "#1B4F8A", bg: "#dbeafe" };
  if (progress > 0) return { label: "Iniziato", color: "#d97706", bg: "#fef3c7" };
  return { label: "Non iniziato", color: "#64748b", bg: "#f1f5f9" };
}

function getInitials(name: string): string {
  return name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    "linear-gradient(135deg, #1B4F8A, #0EA5E9)",
    "linear-gradient(135deg, #1B4F8A, #6366f1)",
    "linear-gradient(135deg, #0F2D52, #1B4F8A)",
    "linear-gradient(135deg, #1e6ab0, #0EA5E9)",
    "linear-gradient(135deg, #1B4F8A, #38bdf8)",
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return colors[idx];
}

export default function ParticipantCard({ participant, totalCourses, rank, delay = 0 }: ParticipantCardProps) {
  const status = getStatusBadge(participant.progress);
  const initials = getInitials(participant.name);
  const avatarColor = getAvatarColor(participant.name);

  return (
    <div
      className="card-hover"
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "16px 20px",
        border: "1px solid rgba(27,79,138,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        animation: `fadeInUp 0.5s ease-out ${delay}ms both`,
        boxShadow: "0 1px 6px rgba(27,79,138,0.05)",
      }}
    >
      {/* Rank */}
      <div style={{
        fontSize: "12px",
        fontWeight: 700,
        color: rank <= 3 ? "#1B4F8A" : "#94a3b8",
        minWidth: "24px",
        textAlign: "center",
      }}>
        {rank <= 3 ? ["🥇","🥈","🥉"][rank-1] : `${rank}`}
      </div>

      {/* Avatar */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: avatarColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 700,
          color: "white",
          flexShrink: 0,
          boxShadow: "0 2px 8px rgba(27,79,138,0.2)",
        }}
      >
        {initials}
      </div>

      {/* Name & email */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {participant.name}
        </p>
        <p style={{ fontSize: "12px", color: "#94a3b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {participant.email}
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ width: "140px", flexShrink: 0 }}>
        <ProgressBar value={participant.progress} height={6} showLabel={true} />
      </div>

      {/* Certifications */}
      <div style={{ textAlign: "center", minWidth: "60px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>
          {participant.certifiedCourses}/{totalCourses}
        </p>
        <p style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 500 }}>certificati</p>
      </div>

      {/* Status badge */}
      <div
        style={{
          padding: "4px 10px",
          borderRadius: "20px",
          background: status.bg,
          color: status.color,
          fontSize: "11px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {status.label}
      </div>

      {/* Start date */}
      <div style={{ textAlign: "right", minWidth: "80px", flexShrink: 0 }}>
        {participant.startDate ? (
          <p style={{ fontSize: "11px", color: "#64748b", fontWeight: 500 }}>
            {new Date(participant.startDate).toLocaleDateString("it-IT", { day: "2-digit", month: "short" })}
          </p>
        ) : (
          <p style={{ fontSize: "11px", color: "#cbd5e1" }}>—</p>
        )}
      </div>
    </div>
  );
}
