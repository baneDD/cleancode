import React from 'react';
import { Link } from 'gatsby';

const Tags = ({ tags }) => (
  <div>
    <ul>
      {tags
        && tags.map((tag) => (
          <li key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </li>
        ))}
    </ul>
  </div>
);

export default Tags;
