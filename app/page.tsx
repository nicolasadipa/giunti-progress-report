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
        padding: "7px 16px",
        textAlign: "center",
        fontSize: "11px",
        color: "rgba(255,255,255,0.7)",
        letterSpacing: "0.03em",
      }}>
        📍 Giunti Psychometrics · Formazione AI · Platzi Business · 27 marzo 2026
      </div>

      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #0F2D52 0%, #1B4F8A 60%, #1e6ab0 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles – hidden on tiny screens */}
        <div className="hidden sm:block" style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", pointerEvents: "none",
        }} />
        <div className="hidden sm:block" style={{
          position: "absolute", bottom: "-80px", left: "30%",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "rgba(14,165,233,0.08)", pointerEvents: "none",
        }} />

        <div className="mx-auto px-4 sm:px-8 lg:px-10" style={{ maxWidth: "1280px", paddingTop: "24px", paddingBottom: "28px" }}>

          {/* Nav row */}
          <div className="flex justify-between items-center" style={{ marginBottom: "24px" }}>
            {/* Logo */}
            <div className="flex items-center" style={{ gap: "12px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}>
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <ellipse cx="14" cy="14" rx="5" ry="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7"/>
                  <line x1="3" y1="14" x2="25" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M6 9.5 Q14 7 22 9.5" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                  <path d="M5 18.5 Q14 21 23 18.5" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.01em" }}>
                  G GIUNTI
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "9px", letterSpacing: "0.18em", fontWeight: 600 }}>
                  PSYCHOMETRICS
                </div>
              </div>
            </div>

            <div className="hidden sm:block" style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "5px 14px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 600 }}>
                27 marzo 2026
              </span>
            </div>
          </div>

          {/* Hero + quick stats */}
          <div className="flex flex-col lg:flex-row lg:items-end" style={{ gap: "24px" }}>
            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(14,165,233,0.2)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: "20px", padding: "3px 10px",
                marginBottom: "12px",
              }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#0EA5E9" }} />
                <span style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 600 }}>Reporte de progreso · AI Learning Paths</span>
              </div>
              <h1 className="text-3xl sm:text-4xl" style={{
                color: "white",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "10px",
                letterSpacing: "-0.02em",
              }}>
                Avanzamento Percorsi<br />
                <span style={{ color: "#7dd3fc" }}>Formazione AI</span>
              </h1>
              <p className="hidden sm:block" style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", maxWidth: "500px", lineHeight: 1.6 }}>
                Monitoraggio dei progressi del team Giunti Psychometrics nei percorsi di formazione AI con Platzi Business.
              </p>
            </div>

            {/* Quick stats – horizontal scroll on mobile */}
            <div className="flex" style={{ gap: "10px", overflowX: "auto", paddingBottom: "2px" }}>
              {[
                { value: overallParticipants, label: "Partecipanti" },
                { value: totalCerts, label: "Certificazioni" },
                { value: 2, label: "Percorsi" },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minWidth: "80px",
                    flexShrink: 0,
                  }}
                >
                  <p style={{ color: "white", fontSize: "28px", fontWeight: 800, lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", fontWeight: 600, marginTop: "3px" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="mx-auto px-4 sm:px-8 lg:px-10 flex" style={{ maxWidth: "1280px", overflowX: "auto" }}>
            {[
              {
                key: "basic",
                label: "Ruta IA Básica",
                shortLabel: "IA Básica",
                sublabel: `${basicRoute.totalCourses} corsi · ${basicRoute.participants.length} part.`,
                icon: "🎓",
                completed: basicStats.completed,
              },
              {
                key: "intermediate",
                label: "Ruta IA Básica-Intermedia",
                shortLabel: "IA Básica-Intermedia",
                sublabel: `${intermediateRoute.totalCourses} corsi · ${intermediateRoute.participants.length} part.`,
                icon: "🚀",
                completed: intStats.completed,
              },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "basic" | "intermediate")}
                style={{
                  padding: "14px 16px",
                  border: "none",
                  borderBottom: activeTab === tab.key ? "3px solid white" : "3px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                  marginBottom: "-1px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "16px" }}>{tab.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{
                    color: activeTab === tab.key ? "white" : "rgba(255,255,255,0.55)",
                    fontWeight: 700,
                    fontSize: "13px",
                    lineHeight: 1.2,
                  }}>
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </p>
                  <p className="hidden sm:block" style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", marginTop: "1px" }}>
                    {tab.sublabel}
                  </p>
                </div>
                <div style={{
                  background: activeTab === tab.key ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "2px 7px",
                  fontSize: "10px",
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
      <main className="mx-auto px-4 sm:px-8 lg:px-10" style={{ maxWidth: "1280px", paddingTop: "28px", paddingBottom: "60px" }}>
        {activeTab === "basic" ? (
          <RouteSection route={basicRoute} accentColor="#1B4F8A" />
        ) : (
          <RouteSection route={intermediateRoute} accentColor="#0F2D52" />
        )}
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-8" style={{
        borderTop: "1px solid rgba(27,79,138,0.1)",
        paddingTop: "20px",
        paddingBottom: "20px",
        background: "white",
      }}>
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-2" style={{ maxWidth: "1280px" }}>
          <div className="flex items-center" style={{ gap: "8px" }}>
            <div style={{
              width: "26px", height: "26px", borderRadius: "50%",
              background: "linear-gradient(135deg, #1B4F8A, #0EA5E9)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "11px", fontWeight: 800 }}>G</span>
            </div>
            <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 500 }}>
              © 2026 Giunti Psychometrics · Platzi Business
            </span>
          </div>
          <span style={{ fontSize: "11px", color: "#94a3b8" }}>Marzo 2026 · Formazione AI</span>
        </div>
      </footer>
    </div>
  );
}
