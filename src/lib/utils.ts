import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Joins class names and resolves clashing Tailwind utilities to the last one given.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
