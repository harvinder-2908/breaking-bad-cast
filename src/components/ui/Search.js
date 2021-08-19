import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="search for characters"
          autoFocus
          onChange={(e) => {
            onChange(e.target.value);
            // console.log(e);
          }}
          value={text}
        />
      </form>
    </section>
  );
};

export default Search;
