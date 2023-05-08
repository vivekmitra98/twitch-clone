import React, { useState } from "react";
import { TbArrowBarLeft } from "react-icons/tb";

import SideDrawerItem from "./SideDrawerItem";

import USER from "../../data/user";
import CATEGORIES from "../../data/categories";
import STREAMS from "../../data/streams";

import styles from "./SideDrawer.module.css";

const SideDrawer = () => {
  const [followedStreams, setFollowedStreams] = useState(
    STREAMS.filter((stream) => USER.followed.streams.includes(stream.id)).sort(
      (a, b) => b.viewers - a.viewers
    )
  );

  const [recommendedStreams, setRecommendedStreams] = useState(
    STREAMS.filter(
      (stream) =>
        !USER.followed.streams.includes(stream.id) && stream.viewers > 0
    )
  );

  return (
    <div className={styles["side-drawer"]}>
      <div className={styles["side-drawer__header"]}>
        <span>For You</span>
        <span>
          <TbArrowBarLeft size={"1.3rem"} fontWeight={"bold"} />
        </span>
      </div>
      <div className={styles["side-drawer__followed"]}>
        <div className={styles["side-drawer__followed__header"]}>
          <span>FOLLOWED CHANNELS</span>
        </div>
        <ul className={styles["side-drawer__followed__list"]}>
          {followedStreams.map((stream) => (
            <SideDrawerItem
              key={stream.id}
              id={stream.id}
              name={stream.name}
              category={CATEGORIES[stream.category]}
              viewers={stream.viewers}
            />
          ))}
        </ul>
      </div>
      <div className={styles["side-drawer__recommended"]}>
        <div className={styles["side-drawer__recommended__header"]}>
          <span>RECOMMENDED CHANNELS</span>
        </div>
        <ul className={styles["side-drawer__recommended__list"]}>
          {recommendedStreams.map((stream) => (
            <SideDrawerItem
              key={stream.id}
              name={stream.name}
              category={CATEGORIES[stream.category]}
              viewers={stream.viewers}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
