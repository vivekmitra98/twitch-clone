import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./Search.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermChangeHandler = (event) => {
    const enteredValue = event.target.value;
    setSearchTerm(enteredValue);
  };

  const searchHandler = () => {};

  return (
    <form className={styles.search} onSubmit={searchHandler}>
      <input
        onChange={searchTermChangeHandler}
        placeholder="Search"
        value={searchTerm}
      ></input>
      <button type="button">
        <FiSearch size={"1.4rem"} />
      </button>
    </form>
  );
};

export default Search;
