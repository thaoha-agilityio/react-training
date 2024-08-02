/**
 * Converts a given number of minutes into a formatted string displaying hours and minutes.
 *
 * @param {number} minutes - The total number of minutes to be converted.
 * @returns {string} The formatted string in the format "Xhrs Ym".
 */
export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}hrs ${remainingMinutes}m`;
};
