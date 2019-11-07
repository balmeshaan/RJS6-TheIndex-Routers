import React from "react";
import { Link, NavLink } from "react-router-dom";

function BookRow(props) {
  const book = props.book;
  const authors = book.authors.map(author => (
    <div key={author.id}>
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  ));

  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
