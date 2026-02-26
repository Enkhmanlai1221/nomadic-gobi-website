import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const phoneRegex = /^(9|8){1}?[0-9]{7}$/;

// cryllic alphabet regex pattern for input validation allow whitespace
export const alphabetRegex = /^[а-яА-ЯёЁүҮөӨ\s]+$/;

export { openGoogleMaps } from "./google-maps";
