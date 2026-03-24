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

const filterLabelsMobile: Record<FilterKey, string> = {
  all: "Tutti",
  completed: "✓",
  inProgress: "⏳",
  notStarted: "—",
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
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* Stats grid: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "12px" }}>
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

      {/* Controls */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

        {/* Row 1: filter tabs + view toggle */}
        <div className="flex items-center justify-between" style={{ gap: "10px" }}>
          {/* Filter tabs */}
          <div className="flex" style={{ gap: "4px", background: "white", padding: "3px", borderRadius: "10px", border: "1px solid rgba(27,79,138,0.1)", overflowX: "auto" }}>
            {(Object.keys(filterLabels) as FilterKey[]).map(key => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "7px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  background: filter === key ? accentColor : "transparent",
                  color: filter === key ? "white" : "#64748b",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <span className="hidden sm:inline" style={{ fontSize: "13px" }}>{filterLabels[key]}</span>
                <span className="sm:hidden" style={{ fontSize: "12px" }}>{filterLabelsMobile[key]}</span>
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div style={{ display: "flex", background: "white", border: "1px solid rgba(27,79,138,0.1)", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
            {[
              { v: "list", icon: "📋", label: "Lista" },
              { v: "chart", icon: "📊", label: "Grafici" },
            ].map(({ v, icon, label }) => (
              <button
                key={v}
                onClick={() => setView(v as "list" | "chart")}
                style={{
                  padding: "7px 12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  background: view === v ? accentColor : "transparent",
                  color: view === v ? "white" : "#64748b",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "14px" }}>{icon}</span>
                <span className="hidden sm:inline" style={{ fontSize: "12px" }}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: search + sort */}
        <div className="flex" style={{ gap: "8px" }}>
          {/* Search – full width on mobile */}
          <div style={{ position: "relative", flex: 1 }}>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
            >
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Cerca nome o email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                paddingLeft: "30px",
                paddingRight: "12px",
                paddingTop: "8px",
                paddingBottom: "8px",
                borderRadius: "8px",
                border: "1px solid rgba(27,79,138,0.15)",
                fontSize: "13px",
                color: "#0f172a",
                background: "white",
                outline: "none",
                width: "100%",
              }}
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
            style={{
              padding: "8px 10px",
              borderRadius: "8px",
              border: "1px solid rgba(27,79,138,0.15)",
              fontSize: "13px",
              color: "#0f172a",
              background: "white",
              outline: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <option value="progress">Progresso</option>
            <option value="name">Nome</option>
            <option value="certifiedCourses">Certificati</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {view === "chart" ? (
        <RouteChart participants={route.participants} totalCourses={route.totalCourses} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {/* Table header – desktop only */}
          <div className="hidden md:flex" style={{
            alignItems: "center",
            padding: "6px 16px",
            gap: "14px",
            fontSize: "10px",
            fontWeight: 700,
            color: "#94a3b8",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            <div style={{ minWidth: "24px" }}>#</div>
            <div style={{ minWidth: "38px" }} />
            <div style={{ flex: 1 }}>Partecipante</div>
            <div style={{ width: "130px" }}>Progresso</div>
            <div style={{ minWidth: "56px", textAlign: "center" }}>Cert.</div>
            <div style={{ minWidth: "88px" }}>Stato</div>
            <div style={{ minWidth: "70px", textAlign: "right" }}>Inizio</div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
              <p style={{ fontSize: "15px" }}>Nessun risultato trovato</p>
            </div>
          ) : (
            filtered.map((p, i) => (
              <ParticipantCard
                key={p.id}
                participant={p}
                totalCourses={route.totalCourses}
                rank={sortBy === "progress" && filter === "all"
                  ? [...route.participants].sort((a, b) => b.progress - a.progress).findIndex(r => r.id === p.id) + 1
                  : i + 1}
                delay={i * 35}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
