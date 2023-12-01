export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function formatDateTimeString(dateTimeStr) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
  })
    .format(new Date(dateTimeStr))
    .split(" ")
    .reverse()
    .join(" ");
}
