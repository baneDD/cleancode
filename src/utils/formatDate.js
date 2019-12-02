const formatDate = (date) => {
  const currentYear = new Date().getFullYear();
  const parsedDate = Date.parse(date);
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  // We only need to display the year if it's not current year
  if (new Date(parsedDate).getFullYear() < currentYear) {
    options.year = 'numeric';
  }

  return new Intl.DateTimeFormat('en-US', options).format(parsedDate);
};

export default formatDate;
