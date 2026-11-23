/**
 * Lightweight class name merger utility.
 * Filters out falsy values and joins valid classes with spaces.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
