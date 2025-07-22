/**
 * @file This file contains utility functions that can be used throughout the frontend application.
 */

/**
 * Formats a JavaScript Date object into a human-readable string (e.g., "Jul 22, 2025").
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
