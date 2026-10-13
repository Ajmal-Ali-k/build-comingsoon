"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { submitWaitlistEmail, validateWaitlistEmail } from "../lib/waitlist";

type Status = "idle" | "pending" | "success" | "error" | "missing-configuration";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const error = validateWaitlistEmail(email);

    if (error) {
      setValidationError(error);
      setStatus("idle");
      return;
    }

    setValidationError(null);
    setStatus("pending");
    setStatus(await submitWaitlistEmail(email, process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT));
  }

  if (status === "success") {
    return (
      <div className="form-status" role="status" aria-live="polite">
        <CheckCircle weight="fill" aria-hidden="true" />
        <div><strong>You&apos;re on the list.</strong><p>We&apos;ll send one email when Billd launches.</p></div>
      </div>
    );
  }

  const message = status === "missing-configuration"
    ? "Waitlist sign-ups are being connected. Please check back shortly."
    : status === "error"
      ? "We couldn't save your email. Please try again."
      : validationError;

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="waitlist-email">Email address</label>
      <div className="form-row">
        <input id="waitlist-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" value={email} onChange={(event) => { setEmail(event.target.value); if (validationError) setValidationError(null); }} aria-invalid={Boolean(validationError)} aria-describedby={message ? "waitlist-message" : undefined} disabled={status === "pending"} />
        <button type="submit" disabled={status === "pending"}>
          {status === "pending" && <span className="button-loader" aria-hidden="true" />}
          {status === "pending" ? "Joining..." : "Join the waitlist"}
          {status !== "pending" && <ArrowRight weight="bold" aria-hidden="true" />}
        </button>
      </div>
      <p className="form-note">One launch email. No spam.</p>
      {message && <p className="form-message" id="waitlist-message" role="alert"><WarningCircle weight="fill" aria-hidden="true" /> {message}</p>}
    </form>
  );
}
