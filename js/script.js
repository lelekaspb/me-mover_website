// stop autoplaying on mobile devices
let mql = window.matchMedia("(max-width: 750px)");

// mql.addEventListener( "change", (e) => {
if (mql.matches) {
  /* the viewport is 750 pixels wide or less */
  console.log("This is a narrow screen — less than 750px wide.");
  document.querySelector("#video-bg").removeAttribute("autoplay");
  document.querySelector("#video-bg").removeAttribute("muted");
  document.querySelector("#video-bg").removeAttribute("loop");
  console.log(document.querySelector("#video-bg"));
  // document.querySelector("#video-bg").setAttributeNode('controls');
} else {
  /* the viewport is more than than 750 pixels wide */
  console.log("This is a wide screen — more than 750px wide.");
}
// })
