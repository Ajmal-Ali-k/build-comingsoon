type ComparisonDashboardProps = { className?: string };

const signals = [
  { label: "Eligibility", value: "Profile fit", className: "signal-fit" },
  { label: "True cost", value: "Fees surfaced", className: "signal-cost" },
  { label: "Real value", value: "Rewards decoded", className: "signal-value" },
];

export function ComparisonDashboard({ className = "" }: ComparisonDashboardProps) {
  return (
    <div className={`comparison-dashboard ${className}`} aria-hidden="true">
      <span className="dashboard-grid" />

      <div className="dashboard-header">
        <span>Billd / decision view</span>
        <span><i /> UAE</span>
      </div>

      <div className="dashboard-core">
        <div className="dashboard-orbit">
          <span className="dashboard-orbit-ring dashboard-orbit-ring-one" />
          <span className="dashboard-orbit-ring dashboard-orbit-ring-two" />
          <span className="dashboard-orbit-mark" />
          <strong>Clear<br />choice</strong>
        </div>

        <div className="dashboard-signals">
          {signals.map((signal) => (
            <div className={`dashboard-signal ${signal.className}`} key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <i><b /></i>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-summary">
        <span>Built around your profile</span>
        <strong>One view. No guesswork.</strong>
      </div>
    </div>
  );
}
