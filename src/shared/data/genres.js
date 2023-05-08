import { MdVideogameAsset } from "react-icons/md";
import { IoMdMicrophone } from "react-icons/io";
import { ImHeadphones, ImTrophy } from "react-icons/im";
import { GiPalette } from "react-icons/gi";

const genres = [
  { id: "g1", name: "Games", symbol: <MdVideogameAsset size={"4rem"} /> },
  { id: "g2", name: "IRL", symbol: <IoMdMicrophone size={"4rem"} /> },
  { id: "g3", name: "Music", symbol: <ImHeadphones size={"4rem"} /> },
  { id: "g4", name: "Esports", symbol: <ImTrophy size={"4rem"} /> },
  { id: "g5", name: "Creative", symbol: <GiPalette size={"4rem"} /> },
];

export default genres;
