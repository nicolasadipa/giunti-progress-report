"use client";

import { useState } from "react";
import { RouteData, getStats } from "../data/reportData";
import StatCard from "./StatCard";
import ParticipantCard from "./ParticipantCard";
import RouteChart from "./RouteChart";

interface RouteSectionProps {
  route: RouteData;
  accentColor?: string;
}

type SortKey = "progress" | "name" | "certifiedCourses";
type FilterKey = "all" | "completed" | "inProgress" | "notStarted";

const filterLabels: Record<FilterKey, string> = {
  all: "Tutti",
  completed: "Completati",
  inProgress: "In corso",
  notStarted: "Non iniziati",
};

export default function RouteSection({ route, accentColor = "#1B4F8A" }: RouteSectionProps) {
  const stats = getStats(route);
  const [sortBy, setSortBy] = useState<SortKey>("progress");
  const [filter, setFilter] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"list" | "chart">("list");

  const filtered = route.participants
    .filter(p => {
      if (filter === "completed") return p.progress === 100;
      if (filter === "inProgress") return p.progress > 0 && p.progress < 100;
      if (filter === "notStarted") return p.progress === 0;
      return true;
    })
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "certifiedCourses") return b.certifiedCourses - a.certifiedCourses;
      return b.progress - a.progress;
    });

  const statCards = [
    {
      label: "Partecipanti totali",
      value: stats.total,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #1B4F8A, #0EA5E9)",
    },
    {
      label: "Hanno completato",
      value: stats.completed,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #16a34a, #22c55e)",
    },
    {
      label: "In corso",
      value: stats.inProgress,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #d97706, #f59e0b)",
    },
    {
      label: "Progresso medio",
      value: stats.avgProgress,
      suffix: "%",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {statCards.map((card, i) => (
          <StatCard
            key={card.label}
            label={card.label}
            value={card.value}
            suffix={card.suffix}
            icon={card.icon}
            color={card.color}
            delay={i * 100}
          />
        ))}
      </div>

      {/* View toggle + controls */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "6px", background: "white", padding: "4px", borderRadius: "10px", border: "1px solid rgba(27,79,138,0.1)" }}>
          {(Object.keys(filterLabels) as FilterKey[]).map(key => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: "6px 14px",
                borderRadius: "7px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                background: filter === key ? accentColor : "transparent",
                color: filter === key ? "white" : "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              {filterLabels[key]}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
            >
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Cerca..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                paddingLeft: "32px",
                paddingRight: "14px",
                paddingTop: "8px",
                paddingBottom: "8px",
                borderRadius: "8px",
                border: "1px solid rgba(27,79,138,0.15)",
                fontSize: "13px",
                color: "#0f172a",
                background: "white",
                outline: "none",
                width: "180px",
              }}
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid rgba(27,79,138,0.15)",
              fontSize: "13px",
              color: "#0f172a",
              background: "white",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="progress">Per progresso</option>
            <option value="name">Per nome</option>
            <option value="certifiedCourses">Per certificati</option>
          </select>

          {/* View toggle */}
          <div style={{ display: "flex", background: "white", border: "1px solid rgba(27,79,138,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            {["list", "chart"].map(v => (
              <button
                key={v}
                onClick={() => setView(v as "list" | "chart")}
                style={{
                  padding: "8px 14px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: view === v ? accentColor : "transparent",
                  color: view === v ? "white" : "#64748b",
                  transition: "all 0.2s",
                }}
              >
                {v === "list" ? "📋 Lista" : "📊 Grafici"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      {view === "chart" ? (
        <RouteChart participants={route.participants} totalCourses={route.totalCourses} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            gap: "16px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#94a3b8",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            <div style={{ minWidth: "24px" }}>#</div>
            <div style={{ minWidth: "42px" }} />
            <div style={{ flex: 1 }}>Partecipante</div>
            <div style={{ width: "140px" }}>Progresso</div>
            <div style={{ minWidth: "60px", textAlign: "center" }}>Cert.</div>
            <div style={{ minWidth: "90px" }}>Stato</div>
            <div style={{ minWidth: "80px", textAlign: "right" }}>Inizio</div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
              <p style={{ fontSize: "16px" }}>Nessun risultato trovato</p>
            </div>
          ) : (
            filtered.map((p, i) => (
              <ParticipantCard
                key={p.id}
                participant={p}
                totalCourses={route.totalCourses}
                rank={sortBy === "progress" && filter === "all" ? route.participants.sort((a,b) => b.progress - a.progress).findIndex(r => r.id === p.id) + 1 : i + 1}
                delay={i * 40}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
