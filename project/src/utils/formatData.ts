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

/**
 * Function to format the current date and time.
 * @returns A string representing the current date and time in the format 'MMM DD, YYYY'.
 */
export const getCurrentDate = () => {
  const currentDate = new Date();

  // Define options for formatting the date part
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  } as Intl.DateTimeFormatOptions;

  return currentDate.toLocaleDateString("en-US", dateOptions);
};
