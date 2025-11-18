/**
 * Truncate text to a specified length and add ellipsis if needed
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum number of characters
 * @returns {string} Truncated text with ellipsis if it exceeds maxLength
 */
export const truncateText = (text, maxLength = 60) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
