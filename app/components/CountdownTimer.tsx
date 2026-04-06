"use client";

import { useEffect, useState } from "react";

// Workshop: Wednesday April 8 2026, 10:00 CLT (UTC-3) = 13:00 UTC
const WORKSHOP_DATE = new Date("2026-04-08T13:00:00Z");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    function tick() {
      const now = new Date();
      const diff = WORKSHOP_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setFinished(true);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #0F2D52 0%, #1B4F8A 60%, #1e6ab0 100%)",
      borderRadius: "20px",
      padding: "28px 24px",
      marginBottom: "28px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative circle */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center" style={{ gap: "10px", marginBottom: "20px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(14,165,233,0.25)",
          border: "1px solid rgba(14,165,233,0.4)",
          borderRadius: "20px", padding: "4px 12px",
          width: "fit-content",
        }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0EA5E9", animation: "pulse 1.5s infinite" }} />
          <span style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em" }}>PRÓXIMO EVENTO</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>Mer 8 apr · 15:00–17:00 h Italia</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center" style={{ gap: "20px" }}>
        {/* Title */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "white", fontWeight: 800, fontSize: "20px", lineHeight: 1.3, marginBottom: "6px", letterSpacing: "-0.01em" }}>
            Taller Online · AI Learning<br />
            <span style={{ color: "#7dd3fc" }}>Formazione Giunti Psychometrics</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.5 }}>
            Todos los participantes de ambas rutas están invitados.
          </p>
        </div>

        {/* Countdown units */}
        {finished ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ fontSize: "28px" }}>🎉</div>
            <span style={{ color: "white", fontWeight: 700, fontSize: "18px" }}>¡El taller está en curso!</span>
          </div>
        ) : (
          <div className="flex" style={{ gap: "8px" }}>
            {units.map((u, i) => (
              <div key={u.label} style={{ textAlign: "center" }}>
                <div style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  minWidth: "56px",
                }}>
                  <div style={{ color: "white", fontWeight: 800, fontSize: "28px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                    {pad(u.value)}
                  </div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "9px", fontWeight: 600, marginTop: "5px", letterSpacing: "0.06em" }}>
                  {u.label.toUpperCase()}
                </div>
                {i < units.length - 1 && (
                  <div style={{ position: "absolute", display: "none" }} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
