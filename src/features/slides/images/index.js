const metaImages = [
  {
    id: "img0",
    title: "Brother and Sister",
    content:
      "Ethan and Elaine are watching Pokemon together on a bunker bed.",
    position: "top"
  },
  {
    id: "img1",
    title: "My Ball!",
    content:
      "Dad and Ethan are kicking some balls at Youido Park under the blue sky.",
    position: "top"
  },
  {
    id: "img2",
    title: "Sunshine Girl",
    content: "Elaine strolling down in her pretty shoes.",
    position: "bottom"
  },
  {
    id: "img3",
    title: "Here Goes The Cannon Ball!",
    content: "Ethan is ready to launch his final attack on dad.",
    position: "top"
  },
  {
    id: "img4",
    title: "Side by Side",
    content: "A sunny afternoon at Han-River Park",
    position: "bottom"
  },
  {
    id: "img5",
    title: "Good Morning Yellow Brick Road",
    content: "Ethan is walking to the Kindergarten with mom and dad.",
    position: "top"
  }
];
// Array of relative paths to images
const requireImg = require.context("./", false, /.*.jpg$/i);
const images = requireImg.keys().map(path => requireImg(path));

metaImages.forEach((metaObj, i) => {
  metaObj.src = images[i];
});

export default metaImages;
