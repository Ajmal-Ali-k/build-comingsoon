export function RevealLine({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`reveal-line ${className}`} aria-hidden="true">
      {words.map((word, wordIndex) => (
        <span className="reveal-word" key={`${word}-${wordIndex}`}>
          {[...word].map((letter, index) => <span className="reveal-character" key={index}>{letter}</span>)}
          {wordIndex < words.length - 1 && <span className="reveal-space"> </span>}
        </span>
      ))}
    </span>
  );
}
