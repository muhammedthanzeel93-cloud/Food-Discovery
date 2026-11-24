import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils/cn";

describe("cn utility function", () => {
  it("merges valid string class names", () => {
    expect(cn("bg-amber-500", "text-white")).toBe("bg-amber-500 text-white");
  });

  it("filters out falsy values (false, null, undefined, empty string)", () => {
    expect(
      cn("base-class", false && "hidden", null, undefined, "", "extra-class")
    ).toBe("base-class extra-class");
  });

  it("returns empty string when given only falsy values or no arguments", () => {
    expect(cn()).toBe("");
    expect(cn(false, undefined, null)).toBe("");
  });
});
