import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}) => {
  if (!hasNextPage && !hasPrevPage) {
    return null;
  }

  return (
    <div>
      <div>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'}>
          Prev
        </Link>
      </div>
      <div>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'}>
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
