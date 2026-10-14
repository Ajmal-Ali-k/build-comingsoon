import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Billd — Find your kind of card. UAE credit cards, decoded.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const displayFont = await readFile(join(process.cwd(), "public/fonts/gloock-regular.ttf"));
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", padding: "48px 56px", background: "#ededea", color: "#0a1628", position: "relative" }}>
        <div style={{ display: "flex", width: "65%", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 30, fontWeight: 700 }}>
            <svg width="38" height="38" viewBox="0 0 200 200">
              <defs><clipPath id="og-billd-mark"><circle cx="100" cy="100" r="100" /></clipPath></defs>
              <g clipPath="url(#og-billd-mark)">
                <rect width="200" height="200" fill="#2E5BFF" />
                <path d="M-8 0H124C116 47 63 83-8 88Z" fill="#A8BDFF" />
                <path d="M-8 88C59 84 106 53 124 0H208V120C169 88 115 87 70 108C38 123 12 128-8 125Z" fill="#6B8AFF" />
                <path d="M-8 142C41 128 88 117 128 120C155 123 179 139 208 169V208H-8Z" fill="#0A1628" />
              </g>
            </svg>
            <span>billd</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span style={{ fontSize: 15, letterSpacing: 2, textTransform: "uppercase" }}>Coming soon to the UAE</span>
            <div style={{ display: "flex", flexDirection: "column", fontFamily: "Gloock", fontSize: 60, lineHeight: 1.18, letterSpacing: -2 }}>
              <span>Find your</span><span style={{ color: "#2e5bff" }}>kind of card.</span>
            </div>
          </div>
          <span style={{ fontSize: 17 }}>UAE credit cards. Eligibility. Fees. Rewards.</span>
        </div>
        <div style={{ display: "flex", flex: 1, position: "relative", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", position: "absolute", width: 300, height: 195, border: "1px solid #6b8aff", borderRadius: 10, transform: "rotate(-25deg)", top: 144, left: -8 }} />
          <div style={{ display: "flex", position: "absolute", width: 305, height: 196, background: "#f7f9ff", border: "1px solid #c9ccd0", borderRadius: 10, transform: "rotate(17deg)", top: 192, left: 45 }} />
          <div style={{ display: "flex", width: 305, height: 196, padding: 25, flexDirection: "column", justifyContent: "space-between", position: "absolute", top: 100, left: 12, background: "#2e5bff", color: "#f7f9ff", borderRadius: 12, transform: "rotate(-11deg)" }}>
            <span style={{ fontSize: 27, fontWeight: 700 }}>billd</span>
            <div style={{ display: "flex", width: 37, height: 28, background: "#a8bdff", borderRadius: 4 }} />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Gloock", data: displayFont, weight: 400, style: "normal" }] },
  );
}
