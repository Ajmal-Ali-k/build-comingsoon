export type WaitlistSubmissionState = "success" | "missing-configuration" | "error";

export function validateWaitlistEmail(email: string): string | null {
  const value = email.trim();
  if (!value) return "Enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
  return null;
}

export async function submitWaitlistEmail(email: string, endpoint: string | undefined, fetcher: typeof fetch = fetch): Promise<WaitlistSubmissionState> {
  if (!endpoint) return "missing-configuration";
  try {
    const response = await fetcher(endpoint, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), source: "Build coming soon page" }),
    });
    return response.ok ? "success" : "error";
  } catch {
    return "error";
  }
}
