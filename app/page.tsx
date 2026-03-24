"use client";

import { useState } from "react";
import RouteSection from "./components/RouteSection";
import { basicRoute, intermediateRoute, getStats } from "./data/reportData";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"basic" | "intermediate">("basic");
  const basicStats = getStats(basicRoute);
  const intStats = getStats(intermediateRoute);

  const overallParticipants = new Set([
    ...basicRoute.participants.map(p => p.email),
    ...intermediateRoute.participants.map(p => p.email),
  ]).size;

  const totalCerts = basicStats.totalCertifications + intStats.totalCertifications;

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>

      {/* Top banner */}
      <div style={{
        background: "#0F2D52",
        padding: "8px 0",
        textAlign: "center",
        fontSize: "12px",
        color: "rgba(255,255,255,0.75)",
        letterSpacing: "0.04em",
      }}>
        📍 Giunti Psychometrics · Programma di Formazione AI · Platzi Business · Marzo 2026
      </div>

      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #0F2D52 0%, #1B4F8A 60%, #1e6ab0 100%)",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "30%",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "rgba(14,165,233,0.08)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "20px", left: "60%",
          width: "120px", height: "120px", borderRadius: "50%",
          background: "rgba(255,255,255,0.03)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 40px 40px" }}>
          {/* Nav row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.2)",
              }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <ellipse cx="14" cy="14" rx="5" ry="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7"/>
                  <line x1="3" y1="14" x2="25" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M6 9.5 Q14 7 22 9.5" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                  <path d="M5 18.5 Q14 21 23 18.5" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.01em" }}>
                  G GIUNTI
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", letterSpacing: "0.18em", fontWeight: 600 }}>
                  PSYCHOMETRICS
                </div>
              </div>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "6px 16px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px", fontWeight: 600 }}>
                Aggiornato al 24 marzo 2026
              </span>
            </div>
          </div>

          {/* Hero content */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "end" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(14,165,233,0.2)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: "20px", padding: "4px 12px",
                marginBottom: "16px",
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0EA5E9" }} />
                <span style={{ color: "#7dd3fc", fontSize: "12px", fontWeight: 600 }}>Reporte de progreso · AI Learning Paths</span>
              </div>
              <h1 style={{
                color: "white",
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}>
                Avanzamento Percorsi<br />
                <span style={{ color: "#7dd3fc" }}>Formazione AI</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", maxWidth: "520px", lineHeight: 1.6 }}>
                Monitoraggio in tempo reale dei progressi del team Giunti Psychometrics nei percorsi di formazione sull&apos;intelligenza artificiale con Platzi Business.
              </p>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { value: overallParticipants, label: "Partecipanti" },
                { value: totalCerts, label: "Certificazioni" },
                { value: 2, label: "Percorsi" },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minWidth: "90px",
                  }}
                >
                  <p style={{ color: "white", fontSize: "32px", fontWeight: 800, lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: 600, marginTop: "4px" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "0 40px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", gap: "0" }}>
            {[
              {
                key: "basic",
                label: "Ruta IA Básica",
                sublabel: `${basicRoute.totalCourses} corsi · ${basicRoute.participants.length} partecipanti`,
                icon: "🎓",
                completed: basicStats.completed,
              },
              {
                key: "intermediate",
                label: "Ruta IA Básica-Intermedia",
                sublabel: `${intermediateRoute.totalCourses} corsi · ${intermediateRoute.participants.length} partecipanti`,
                icon: "🚀",
                completed: intStats.completed,
              },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "basic" | "intermediate")}
                style={{
                  padding: "18px 28px",
                  border: "none",
                  borderBottom: activeTab === tab.key ? "3px solid white" : "3px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.2s ease",
                  marginBottom: "-1px",
                }}
              >
                <span style={{ fontSize: "18px" }}>{tab.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{
                    color: activeTab === tab.key ? "white" : "rgba(255,255,255,0.55)",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: 1.2,
                  }}>
                    {tab.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "2px" }}>
                    {tab.sublabel}
                  </p>
                </div>
                <div style={{
                  background: activeTab === tab.key ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "2px 8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: activeTab === tab.key ? "white" : "rgba(255,255,255,0.4)",
                }}>
                  {tab.completed} ✓
                </div>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "36px 40px 60px" }}>
        {activeTab === "basic" ? (
          <RouteSection route={basicRoute} accentColor="#1B4F8A" />
        ) : (
          <RouteSection route={intermediateRoute} accentColor="#0F2D52" />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(27,79,138,0.1)",
        padding: "24px 40px",
        background: "white",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "linear-gradient(135deg, #1B4F8A, #0EA5E9)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "12px", fontWeight: 800 }}>G</span>
            </div>
            <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
              © 2026 Giunti Psychometrics · Reporte generato da Platzi Business
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>
            Marzo 2026 · Formazione AI
          </span>
        </div>
      </footer>
    </div>
  );
}
