function isWeekend(date) {
  if (date.format("dddd") === "Saturday" || date.format("dddd") === "Sunday")
    return true;
  return false;
}

export default isWeekend;
