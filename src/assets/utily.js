export function convertUtcToLocaleTimeWithAMPM(unixTimestamp) {
  // Create a Date object from the Unix timestamp
  const utcDate = new Date(unixTimestamp * 1000);

  // Apply the local timezone offset to the UTC date
  const localTime = new Date(utcDate.getTime());

  // Get hours, minutes, and AM/PM
  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Adjust hours for AM/PM format
  const formattedHours = hours % 12 || 12;

  // Format the local time as a string with AM/PM
  const localTimeString = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return localTimeString;
}
