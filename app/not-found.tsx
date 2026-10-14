import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { BilldLogo } from "../components/billd-logo";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <BilldLogo className="not-found-logo" wordmarkClassName="not-found-wordmark" />
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>This page has moved or doesn’t exist.</p>
        <Link href="/"><ArrowLeft weight="bold" aria-hidden="true" />Back to Billd</Link>
      </div>
    </main>
  );
}
