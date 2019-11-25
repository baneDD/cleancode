import React from 'react';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Meta = ({ date }) => (
  <div>
    <p>
      {`Published ${new Intl.DateTimeFormat('en-US', options).format(
        Date.parse(date)
      )}`}
    </p>
  </div>
);

export default Meta;
