import React from "react";

import GenreItem from "./GenreItem";

import GENRES from "../../../shared/data/genres";

import styles from "./GenresSection.module.css";

const GenresSection = () => {
  return (
    <div className={styles["genre"]}>
      {GENRES.map((genre) => (
        <GenreItem key={genre.id} label={genre.name} symbol={genre.symbol} />
      ))}
    </div>
  );
};

export default GenresSection;
