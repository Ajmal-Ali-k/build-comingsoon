import { BilldMark } from "./billd-logo";

function CardFace() {
  return (
    <div className="sculpture-face">
      <svg className="card-pattern" viewBox="0 0 440 278" fill="none" aria-hidden="true">
        <path d="M440 0H280C300 82 353 137 440 155V0Z" fill="var(--blue-mid)" />
        <path d="M440 155C353 139 288 185 243 278H440V155Z" fill="var(--blue-light)" />
        <path d="M440 198C367 191 331 227 302 278" stroke="var(--surface)" strokeOpacity=".45" />
      </svg>
      <div className="card-brand"><BilldMark /><span>billd</span></div>
      <svg className="card-chip" viewBox="0 0 76 40" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="46" height="36" rx="5" fill="var(--blue-light)" />
        <path d="M16 1V37M32 1V37M1 13H47M1 25H47" stroke="var(--blue)" strokeOpacity=".55" />
        <path d="M60 11C65 17 65 23 60 29M67 6C75 15 75 25 67 34" stroke="var(--blue-light)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="card-edge" />
    </div>
  );
}

export function CardSculpture() {
  return (
    <div className="card-sculpture" aria-hidden="true">
      <div className="sculpture-orbit"><span /><span /><span /><span /></div>
      <div className="sculpture-parallax">
        <div className="sculpture-sheet sculpture-sheet--back"><span className="sheet-rule" /><span className="sheet-rule" /><span className="sheet-rule" /></div>
        <div className="sculpture-sheet sculpture-sheet--outline" />
        <div className="sculpture-card"><CardFace /></div>
      </div>
    </div>
  );
}

export function CardAnatomy() {
  return (
    <div className="card-anatomy" aria-hidden="true">
      <div className="anatomy-guide" />
      <div className="anatomy-layer anatomy-layer--fit">
        <div className="layer-face"><span className="layer-index">01</span><span className="layer-name">Eligibility</span><svg viewBox="0 0 120 68" fill="none"><circle cx="60" cy="23" r="13" stroke="currentColor" strokeWidth="1.5" /><path d="M33 63C33 46 44 40 60 40C76 40 87 46 87 63M16 34L24 42L40 24M95 20H112M95 29H107" stroke="currentColor" strokeWidth="1.5" /></svg></div>
      </div>
      <div className="anatomy-layer anatomy-layer--fees">
        <div className="layer-face"><span className="layer-index">02</span><span className="layer-name">Fees</span><svg viewBox="0 0 120 68" fill="none"><path d="M21 18H99M21 35H99M21 52H99M49 18V52M81 18V52" stroke="currentColor" strokeWidth="1.5" /><path d="M9 1H111V67H9V1Z" stroke="currentColor" strokeWidth="1.5" /></svg></div>
      </div>
      <div className="anatomy-layer anatomy-layer--rewards">
        <div className="layer-face"><span className="layer-index">03</span><span className="layer-name">Rewards</span><svg viewBox="0 0 120 68" fill="none"><path d="M60 5L68 26L91 26L73 40L79 62L60 49L41 62L47 40L29 26L52 26L60 5Z" stroke="currentColor" strokeWidth="1.5" /><path d="M8 34H20M100 34H112" stroke="currentColor" strokeWidth="1.5" /></svg></div>
      </div>
    </div>
  );
}
