"use client";

export default function GiuntiLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe outer ring */}
      <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
      {/* Globe filled circle */}
      <circle cx="24" cy="24" r="16" fill="white" opacity="0.15" />
      {/* Globe meridians */}
      <ellipse cx="24" cy="24" rx="8" ry="16" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <line x1="8" y1="24" x2="40" y2="24" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <path d="M12 16 Q24 12 36 16" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <path d="M10 32 Q24 36 38 32" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      {/* G letter */}
      <text x="18" y="29" fontSize="14" fontWeight="800" fill="white" fontFamily="Arial">G</text>
    </svg>
  );
}
