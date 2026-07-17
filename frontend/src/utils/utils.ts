import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and safely merges conflicting
 * Tailwind CSS utilities using tailwind-merge.
 *
 * @param inputs - Array of class names, conditional objects, or arrays.
 * @returns A cleanly merged string of valid Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
