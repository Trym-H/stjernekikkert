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

export const formatDefaultPads = pads => {
  let splitpads = pads.split(",");

  let findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  let duplicates = findDuplicates(splitpads);

  if (duplicates.length !== 0) {
    let noDuplicates = [...new Set(findDuplicates(splitpads))];
    return noDuplicates;
  } else return splitpads;
};
