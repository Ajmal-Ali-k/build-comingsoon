type BilldLogoProps = {
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  title?: string;
};

export function BilldMark({ className, title }: Pick<BilldLogoProps, "className" | "title">) {
  return (
    <svg className={className} viewBox="0 0 200 200" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      {title ? <title>{title}</title> : null}
      <defs>
        <clipPath id="billd-mark-clip"><circle cx="100" cy="100" r="100" /></clipPath>
      </defs>
      <g clipPath="url(#billd-mark-clip)">
        <rect width="200" height="200" fill="#2E5BFF" />
        <path d="M-8 0H124C116 47 63 83-8 88Z" fill="#A8BDFF" />
        <path d="M-8 88C59 84 106 53 124 0H208V120C169 88 115 87 70 108C38 123 12 128-8 125Z" fill="#6B8AFF" />
        <path d="M-8 142C41 128 88 117 128 120C155 123 179 139 208 169V208H-8Z" fill="#0A1628" />
      </g>
    </svg>
  );
}

export function BilldLogo({ className, wordmarkClassName, showWordmark = true, title }: BilldLogoProps) {
  return (
    <span className={className} aria-label={title}>
      <BilldMark className="billd-mark" />
      {showWordmark ? <span className={wordmarkClassName ?? "billd-wordmark"}>billd</span> : null}
    </span>
  );
}
