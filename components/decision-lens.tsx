type DecisionLensProps = { className?: string };

function CardChip() {
  return <span className="card-chip" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>;
}

export function DecisionLens({ className = "" }: DecisionLensProps) {
  return (
    <div className={`lens-scene ${className}`} aria-hidden="true">
      <span className="orbit orbit-outer" />
      <span className="orbit orbit-inner" />
      <span className="lens-glow" />
      <div className="credit-card credit-card-back">
        <span className="card-sheen" />
        <div className="card-topline"><span>BILLD / 02</span><span>VALUE</span></div>
        <CardChip />
        <span className="card-arc card-arc-back" />
        <div className="card-footer"><span>•••• 8274</span><span>SELECT</span></div>
      </div>
      <div className="optical-lens">
        <span className="lens-reflection" />
        <span className="lens-crosshair lens-crosshair-x" />
        <span className="lens-crosshair lens-crosshair-y" />
        <span className="lens-number">03</span>
        <span className="lens-word">CLARITY</span>
      </div>
      <div className="credit-card credit-card-front">
        <span className="card-sheen" />
        <div className="card-topline"><span>BILLD / 01</span><span>FIT</span></div>
        <CardChip />
        <span className="card-arc card-arc-front" />
        <div className="card-footer"><span>•••• 2048</span><span>ESSENTIAL</span></div>
      </div>
      <span className="data-label data-label-fit"><i />Salary fit</span>
      <span className="data-label data-label-cost"><i />True cost</span>
      <span className="data-label data-label-value"><i />Real value</span>
    </div>
  );
}
