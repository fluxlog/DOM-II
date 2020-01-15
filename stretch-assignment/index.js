const box1 = document.querySelector(".block--red");

box1.addEventListener("mouseenter", () => {
  gsap.to(".block--red", {
  duration: 1,
  filter: "none",
  x: -20,
  y: -10,
  rotate: 360,
  yoyo: true,
  repeat: 1
})

})