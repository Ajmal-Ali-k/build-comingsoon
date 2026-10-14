"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { submitWaitlistEmail, validateWaitlistEmail } from "../lib/waitlist";

type Status = "idle" | "pending" | "success" | "error" | "missing-configuration";

export function WaitlistForm() {
  const emailId = useId();
  const messageId = `${emailId}-message`;
  const noteId = `${emailId}-note`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const error = validateWaitlistEmail(email);

    if (error) {
      setValidationError(error);
      setStatus("idle");
      inputRef.current?.focus();
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
        <div><strong>You&apos;re on the list.</strong><p>We&apos;ll email you when Billd launches.</p></div>
      </div>
    );
  }

  const message = status === "missing-configuration"
    ? "Signups are temporarily unavailable. Please try again later."
    : status === "error"
      ? "Your email wasn’t saved. Please try again."
      : validationError;

  return (
    <form className="form" aria-label="Billd early access" onSubmit={handleSubmit} noValidate>
      <label htmlFor={emailId}>Email address</label>
      <div className="form-row">
        <input ref={inputRef} id={emailId} name="email" type="email" autoComplete="email" inputMode="email" value={email} onChange={(event) => { setEmail(event.target.value); if (validationError) setValidationError(null); }} aria-invalid={Boolean(validationError)} aria-describedby={message ? `${noteId} ${messageId}` : noteId} disabled={status === "pending"} />
        <button type="submit" disabled={status === "pending"}>
          {status === "pending" && <span className="button-loader" aria-hidden="true"><i /><i /><i /></span>}
          {status === "pending" ? "Joining…" : "Join the waitlist"}
          {status !== "pending" && <ArrowRight weight="bold" aria-hidden="true" />}
        </button>
      </div>
      <p className="form-note" id={noteId}>One email when Billd launches.</p>
      {message && <p className="form-message" id={messageId} role="alert"><WarningCircle weight="fill" aria-hidden="true" /> {message}</p>}
    </form>
  );
}
