import { ImageResponse } from "next/og";

export const alt = "ShebaByte — Technology & Software for Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#0f172a", color: "white" }}>
        <div style={{ fontSize: 40, color: "#60a5fa", fontWeight: 700 }}>ShebaByte</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 24, lineHeight: 1.1 }}>We build software that moves your business forward.</div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 32 }}>Technology company · Ethiopia</div>
      </div>
    ),
    size,
  );
}
