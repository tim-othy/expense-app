import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { description, amount, createdAt, id } = props;
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>
          {description}
        </Link>
      </h3>
      <p>{amount} - {createdAt}</p>
    </div>
  );
}
