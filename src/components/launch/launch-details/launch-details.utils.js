export const getStatus = statusCode => {
  switch (statusCode) {
    case 1:
      return "Green";
    case 2:
      return "Red";
    case 3:
      return "Success";
    case 4:
      return "Failed";
    default:
      return "Undefined";
  }
};

export const dateTimeProbability = dateTimeNumber => {
  if (dateTimeNumber === 1) {
    return "Uncertain";
  } else {
    return "Certain";
  }
};
