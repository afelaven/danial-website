import { ImageResponse } from "next/og"

export const alt = "Danial Haikal — Senior Software Developer & Mobile Team Lead"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b1120",
          backgroundImage:
            "radial-gradient(800px 400px at 20% 0%, rgba(94, 234, 212, 0.10), transparent 70%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#5eead4",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              backgroundColor: "#4ade80",
            }}
          />
          Available for Senior Mobile &amp; Team Lead roles
        </div>

        <div
          style={{
            marginTop: "28px",
            fontSize: "88px",
            fontWeight: 700,
            letterSpacing: "-2px",
            color: "#f8fafc",
          }}
        >
          Danial Haikal
        </div>

        <div
          style={{
            marginTop: "20px",
            maxWidth: "900px",
            fontSize: "38px",
            lineHeight: 1.35,
            color: "#94a3b8",
          }}
        >
          I build and lead production mobile apps for banking, fintech, and
          healthcare.
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "40px",
            fontSize: "26px",
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "#5eead4", fontWeight: 700 }}>6+</span>
            years experience
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "#5eead4", fontWeight: 700 }}>6</span>
            apps in production
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "#5eead4", fontWeight: 700 }}>2</span>
            banks shipped for
          </div>
        </div>

        <div
          style={{
            marginTop: "56px",
            display: "flex",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          danialhaikal.vercel.app · Flutter · Flutter Web · React
        </div>
      </div>
    ),
    { ...size },
  )
}
