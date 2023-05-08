import React from "react";

import Carousel from "../components/Carousel/Carousel";
import Section from "../components/Section/Section";
import GenresSection from "../components/Genres/GenresSection";

import STREAMS from "../../shared/data/streams";
import CATEGORIES from "../../shared/data/categories";

import styles from "./Home.module.css";

const channelItems = [];
const categoryItems = [];
let valorantId, csgoId;

STREAMS.forEach((stream) => {
  if (stream.viewers > 0) {
    channelItems.push({
      id: stream.id,
      img: CATEGORIES[stream.category].logo,
      category: stream.category,
      title: stream.name,
      subTitle: stream.category,
      viewers: stream.viewers,
    });
  }
});

for (const key in CATEGORIES) {
  if (CATEGORIES[key].name === "Valorant") {
    valorantId = key;
  }
  if (CATEGORIES[key].name === "CSGO") {
    csgoId = key;
  }
  if (CATEGORIES[key].viewers > 0) {
    categoryItems.push({
      id: key,
      img: CATEGORIES[key].logo,
      category: CATEGORIES[key].name,
      title: CATEGORIES[key].name,
      viewers: CATEGORIES[key].viewers,
    });
  }
}

const valorantItems = channelItems.filter(
  (item) => item.category === valorantId
);
const csgoItems = channelItems.filter((item) => item.category === csgoId);

channelItems.sort(() => Math.random() - 0.5);
categoryItems.sort((a, b) => b.viewers - a.viewers);

valorantItems.sort(() => Math.random() - 0.5);
csgoItems.sort(() => Math.random() - 0.5);

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel />
      <div className={styles["home__channels-categories"]}>
        <Section
          before={""}
          title={"Live channels"}
          after={" we think you'll like"}
          items={channelItems.slice(0, 5)}
        />
        <Section
          before={""}
          title={"Categories"}
          after={" we think you'll like"}
          items={categoryItems}
        />
      </div>
      <div className={styles["home__genres"]}>
        <GenresSection />
      </div>
      <div className={styles["home__recommendations"]}>
        <Section
          before={"Recommended "}
          title={CATEGORIES[valorantId].name.toUpperCase()}
          after={" channels"}
          items={valorantItems.slice(0, 5)}
        />
        <Section
          before={"Recommended "}
          title={CATEGORIES[csgoId].name.toUpperCase()}
          after={" channels"}
          items={csgoItems.slice(0, 5)}
        />
      </div>
    </div>
  );
};

export default Home;
