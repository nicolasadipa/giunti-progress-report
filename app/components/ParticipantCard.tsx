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
  return colors[name.charCodeAt(0) % colors.length];
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
        borderRadius: "10px",
        border: "1px solid rgba(27,79,138,0.08)",
        animation: `fadeInUp 0.5s ease-out ${delay}ms both`,
        boxShadow: "0 1px 4px rgba(27,79,138,0.05)",
        overflow: "hidden",
      }}
    >
      {/* ── Desktop layout ─────────────────────────────────────── */}
      <div className="hidden md:flex items-center" style={{ padding: "14px 16px", gap: "14px" }}>
        {/* Rank */}
        <div style={{ fontSize: "12px", fontWeight: 700, color: rank <= 3 ? "#1B4F8A" : "#94a3b8", minWidth: "24px", textAlign: "center" }}>
          {rank <= 3 ? ["🥇","🥈","🥉"][rank-1] : rank}
        </div>
        {/* Avatar */}
        <div style={{
          width: "38px", height: "38px", borderRadius: "50%",
          background: avatarColor, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "13px", fontWeight: 700, color: "white", flexShrink: 0,
          boxShadow: "0 2px 6px rgba(27,79,138,0.2)",
        }}>
          {initials}
        </div>
        {/* Name & email */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px", marginBottom: "1px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {participant.name}
          </p>
          <p style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {participant.email}
          </p>
        </div>
        {/* Progress */}
        <div style={{ width: "130px", flexShrink: 0 }}>
          <ProgressBar value={participant.progress} height={6} showLabel={true} />
        </div>
        {/* Certs */}
        <div style={{ textAlign: "center", minWidth: "56px" }}>
          <p style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>{participant.certifiedCourses}/{totalCourses}</p>
          <p style={{ fontSize: "9px", color: "#94a3b8", fontWeight: 500 }}>cert.</p>
        </div>
        {/* Status */}
        <div style={{ padding: "3px 9px", borderRadius: "20px", background: status.bg, color: status.color, fontSize: "11px", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
          {status.label}
        </div>
        {/* Date */}
        <div style={{ textAlign: "right", minWidth: "68px", flexShrink: 0 }}>
          {participant.startDate ? (
            <p style={{ fontSize: "11px", color: "#64748b" }}>
              {new Date(participant.startDate).toLocaleDateString("it-IT", { day: "2-digit", month: "short" })}
            </p>
          ) : (
            <p style={{ fontSize: "11px", color: "#cbd5e1" }}>—</p>
          )}
        </div>
      </div>

      {/* ── Mobile layout ──────────────────────────────────────── */}
      <div className="md:hidden" style={{ padding: "12px 14px" }}>
        {/* Top row: rank + avatar + name + status badge */}
        <div className="flex items-center" style={{ gap: "10px", marginBottom: "10px" }}>
          {/* Rank */}
          <div style={{ fontSize: "13px", minWidth: "20px", textAlign: "center" }}>
            {rank <= 3 ? ["🥇","🥈","🥉"][rank-1] : <span style={{ fontWeight: 700, color: "#94a3b8", fontSize: "12px" }}>{rank}</span>}
          </div>
          {/* Avatar */}
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: avatarColor, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: 700, color: "white", flexShrink: 0,
          }}>
            {initials}
          </div>
          {/* Name */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {participant.name}
            </p>
          </div>
          {/* Status badge */}
          <div style={{ padding: "3px 8px", borderRadius: "20px", background: status.bg, color: status.color, fontSize: "10px", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
            {status.label}
          </div>
        </div>

        {/* Bottom row: progress bar + cert count */}
        <div className="flex items-center" style={{ gap: "12px", paddingLeft: "30px" }}>
          <div style={{ flex: 1 }}>
            <ProgressBar value={participant.progress} height={7} showLabel={true} />
          </div>
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>
              {participant.certifiedCourses}/{totalCourses}
            </span>
            <span style={{ fontSize: "10px", color: "#94a3b8", marginLeft: "3px" }}>cert.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
