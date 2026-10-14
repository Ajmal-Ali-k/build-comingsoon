import { describe, expect, it, vi } from "vitest";
import { submitWaitlistEmail, validateWaitlistEmail } from "./waitlist";

describe("waitlist", () => {
  it("requires a valid email address", () => {
    expect(validateWaitlistEmail("")).toBe("Enter your email address.");
    expect(validateWaitlistEmail("not-an-email")).toBe("Enter a valid email address.");
    expect(validateWaitlistEmail("hello@example.com")).toBeNull();
  });

  it("handles missing, pending, successful, and failed submissions", async () => {
    expect(await submitWaitlistEmail("hello@example.com", undefined)).toBe("missing-configuration");
    const successFetcher = vi.fn().mockResolvedValue({ ok: true });
    await expect(submitWaitlistEmail(" hello@example.com ", "https://formspree.io/f/example", successFetcher)).resolves.toBe("success");
    expect(JSON.parse(successFetcher.mock.calls[0][1].body)).toEqual({
      email: "hello@example.com",
      source: "Billd coming soon page",
    });
    await expect(submitWaitlistEmail("hello@example.com", "https://formspree.io/f/example", vi.fn().mockResolvedValue({ ok: false }))).resolves.toBe("error");

    let resolveResponse: (response: Response) => void = () => undefined;
    const pendingResponse = new Promise<Response>((resolve) => { resolveResponse = resolve; });
    const submission = submitWaitlistEmail("hello@example.com", "https://formspree.io/f/example", vi.fn(() => pendingResponse) as unknown as typeof fetch);
    let settled = false;
    void submission.then(() => { settled = true; });
    await Promise.resolve();
    expect(settled).toBe(false);
    resolveResponse({ ok: true } as Response);
    await expect(submission).resolves.toBe("success");
  });
});
