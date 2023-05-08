import streams from "./streams";

const categories = {
  g1: {
    name: "Valorant",
    logo: "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png",
    viewers: 0,
  },
  g2: {
    name: "CSGO",
    logo: "https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png",
    viewers: 0,
  },
  g3: {
    name: "EFT",
    logo: "https://www.escapefromtarkov.com/themes/eft/images/eft_logo_promo.jpg",
    viewers: 0,
  },
  g4: {
    name: "NFS",
    logo: "https://i.pinimg.com/originals/58/e4/dc/58e4dceb9486406da66f9b7daa542476.jpg",
    viewers: 0,
  },
  g5: {
    name: "Apex Legends",
    logo: "https://www.pngitem.com/pimgs/m/476-4763739_red-apex-legends-logo-png-hd-pngbg-poster.png",
    viewers: 0,
  },
  g6: {
    name: "COD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Logo_CoD.jpg",
    viewers: 0,
  },
  g7: {
    name: "Just Chatting",
    logo: "https://static-cdn.jtvnw.net/ttv-boxart/509658-272x380.jpg",
    viewers: 0,
  },
  g8: {
    name: "F122",
    logo: "https://spottis.com/img/public/f1-22-logo.jpg",
    viewers: 0,
  },
};

streams.forEach((stream) => {
  categories[stream.category].viewers += stream.viewers;
});

export default categories;
