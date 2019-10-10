export const formatDate = ({ date, isLocal }) => {
  if (!isLocal) {
    const fullDate = new Date(date);

    let minutes = addZero(fullDate.getMinutes());
    let hours = addZero(fullDate.getHours());

    return formateDateString(fullDate, hours, minutes);
  } else {
    const dateUTC = new Date(date);

    let minutesUTC = addZero(dateUTC.getUTCMinutes());
    let hoursUTC = addZero(dateUTC.getUTCHours());

    return formateDateString(dateUTC, hoursUTC, minutesUTC);
  }
};

const addZero = number => {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};

const formateDateString = (date, hours, minutes) => {
  const formatedDate =
    date.getDate() +
    ". " +
    monthMap[date.getMonth()] +
    ", " +
    hours +
    ":" +
    minutes;

  return formatedDate;
};

const monthMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};
