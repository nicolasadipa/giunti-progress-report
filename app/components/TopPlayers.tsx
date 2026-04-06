"use client";

import { getTopPlayers } from "../data/reportData";

function getInitials(name: string): string {
  return name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    "linear-gradient(135deg, #1B4F8A, #0EA5E9)",
    "linear-gradient(135deg, #1B4F8A, #6366f1)",
    "linear-gradient(135deg, #0F2D52, #1B4F8A)",
    "linear-gradient(135deg, #1e6ab0, #0EA5E9)",
    "linear-gradient(135deg, #16a34a, #0EA5E9)",
  ];
  return colors[name.charCodeAt(0) % colors.length];
}

const MEDALS = ["🥇", "🥈", "🥉"];

export default function TopPlayers() {
  const players = getTopPlayers(10);

  return (
    <div style={{
      background: "white",
      borderRadius: "16px",
      border: "1px solid rgba(27,79,138,0.08)",
      boxShadow: "0 2px 12px rgba(27,79,138,0.06)",
      overflow: "hidden",
      marginBottom: "28px",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0F2D52 0%, #1B4F8A 100%)",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontSize: "20px" }}>🏆</span>
            <h2 style={{ color: "white", fontWeight: 800, fontSize: "17px", margin: 0 }}>
              Top 10 Players
            </h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", margin: 0 }}>
            Ranking consolidado · Ambas rutas
          </p>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "6px 12px",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "11px", fontWeight: 600 }}>
            Score = certs × 10 + prog. medio
          </span>
        </div>
      </div>

      {/* Table header – desktop only */}
      <div className="hidden md:grid" style={{
        gridTemplateColumns: "44px 1fr 90px 90px 90px 90px 70px",
        padding: "10px 20px",
        borderBottom: "1px solid #f1f5f9",
        background: "#f8fafc",
      }}>
        {["#", "Participante", "Básica", "Intermedia", "Total cert.", "Prog. medio", "Score"].map(h => (
          <span key={h} style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div>
        {players.map((p, i) => {
          const avgProg = Math.round((p.basicProgress + p.interProgress) / 2);
          const isTop3 = i < 3;

          return (
            <div
              key={p.email}
              style={{
                borderBottom: i < players.length - 1 ? "1px solid #f1f5f9" : "none",
                background: isTop3 ? "rgba(27,79,138,0.025)" : "white",
                animation: `fadeInUp 0.4s ease-out ${i * 60}ms both`,
              }}
            >
              {/* ── Desktop row ── */}
              <div
                className="hidden md:grid items-center"
                style={{
                  gridTemplateColumns: "44px 1fr 90px 90px 90px 90px 70px",
                  padding: "13px 20px",
                  gap: "0",
                }}
              >
                {/* Rank */}
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#94a3b8" }}>
                  {i < 3 ? MEDALS[i] : <span style={{ fontSize: "13px" }}>{i + 1}</span>}
                </div>

                {/* Name + avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: getAvatarColor(p.name),
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 700, color: "white", flexShrink: 0,
                    boxShadow: "0 2px 6px rgba(27,79,138,0.18)",
                  }}>
                    {getInitials(p.name)}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: "14px", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "1px" }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: "10px", color: "#94a3b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.email}</p>
                  </div>
                </div>

                {/* Básica certs */}
                <CertBadge value={p.basicCerts} max={4} />

                {/* Intermedia certs */}
                <CertBadge value={p.interCerts} max={6} />

                {/* Total certs */}
                <div>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>{p.totalCerts}</span>
                  <span style={{ fontSize: "10px", color: "#94a3b8", marginLeft: "3px" }}>/ 10</span>
                </div>

                {/* Avg progress */}
                <div>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: avgProg === 100 ? "#16a34a" : avgProg >= 50 ? "#1B4F8A" : "#64748b" }}>
                    {avgProg}%
                  </span>
                </div>

                {/* Score */}
                <div style={{
                  background: isTop3 ? "rgba(27,79,138,0.1)" : "#f8fafc",
                  borderRadius: "8px",
                  padding: "4px 10px",
                  display: "inline-block",
                  fontWeight: 800,
                  fontSize: "14px",
                  color: isTop3 ? "#1B4F8A" : "#475569",
                }}>
                  {p.score}
                </div>
              </div>

              {/* ── Mobile row ── */}
              <div className="md:hidden" style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ fontSize: "16px", minWidth: "22px", textAlign: "center" }}>
                    {i < 3 ? MEDALS[i] : <span style={{ fontWeight: 700, color: "#94a3b8", fontSize: "12px" }}>{i + 1}</span>}
                  </div>
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "50%",
                    background: getAvatarColor(p.name),
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: "white", flexShrink: 0,
                  }}>
                    {getInitials(p.name)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: "13px", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: "11px", color: "#64748b" }}>
                      {p.totalCerts} cert. · {avgProg}% prog.
                    </p>
                  </div>
                  <div style={{
                    background: isTop3 ? "rgba(27,79,138,0.1)" : "#f8fafc",
                    borderRadius: "8px",
                    padding: "4px 10px",
                    fontWeight: 800,
                    fontSize: "14px",
                    color: isTop3 ? "#1B4F8A" : "#475569",
                    flexShrink: 0,
                  }}>
                    {p.score}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CertBadge({ value, max }: { value: number; max: number }) {
  const full = value === max;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <span style={{ fontWeight: 700, fontSize: "14px", color: full ? "#16a34a" : "#0f172a" }}>{value}</span>
      <span style={{ fontSize: "10px", color: "#94a3b8" }}>/ {max}</span>
      {full && <span style={{ fontSize: "11px" }}>✅</span>}
    </div>
  );
}
