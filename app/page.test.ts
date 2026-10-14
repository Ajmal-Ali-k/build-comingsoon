import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("Billd launch page", () => {
  it("renders a complete, readable story before animation runs", () => {
    const html = renderToStaticMarkup(createElement(HomePage));
    expect(html.match(/<main\b/g)).toHaveLength(1);
    expect(html).toContain('href="#main-content"');
    expect(html).toContain('aria-label="Find your kind of card."');
    expect(html.match(/data-story-step=/g)).toHaveLength(3);
    expect(html).toContain("See salary requirements and who can apply.");
    expect(html).toContain("Compare annual fees, charges abroad");
    expect(html).toContain("Understand cashback, miles and perks");
    expect(html).not.toContain('style="opacity:0');
    expect(html).not.toContain("Lorem ipsum");
  });

  it("keeps both signup forms independently labelled without placeholders", () => {
    const html = renderToStaticMarkup(createElement(HomePage));
    const ids = [...html.matchAll(/<input[^>]*\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(ids).toHaveLength(2);
    expect(new Set(ids).size).toBe(2);
    ids.forEach((id) => expect(html).toContain(`for="${id}"`));
    expect(html.match(/type="email"/g)).toHaveLength(2);
    expect(html.match(/autoComplete="email"/g)).toHaveLength(2);
    expect(html).not.toContain("placeholder=");
    expect(html).not.toContain("Privacy policy");
  });
});
