const book = document.querySelector(".book");
let currentRotation = 0;

document.addEventListener("click", (e) => {
  currentRotation += 90;
  if (currentRotation >= 270) {
    currentRotation = 0;
  }
  book.style.transform = `rotateY(${currentRotation}deg)`;
});

// Add mouse move effect for dynamic perspective
document.addEventListener("mousemove", (e) => {
  const width = window.innerWidth;

  let xAxis = (e.pageX / width) * 270;

  if (xAxis >= 0 && xAxis <= 90) {
    xAxis = 0;
  } else if (xAxis > 90 && xAxis <= 180) {
    xAxis = 90;
  } else if (xAxis > 180 && xAxis <= 270) {
    xAxis = 180;
  }

  currentRotation = xAxis;

  const xdeg = `${xAxis}deg`;
  book.style.transform = `rotateY(${xdeg})`; // rotateX(${xdeg})`;
  //   console.log(xAxis, xdeg, currentRotation);
  // rotate horizontlly based on mouse x position
  //book.style.transform = `rotateX(${e.pageX / 25}deg)`;
  /*
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  book.style.transform = `rotateY(${currentRotation}deg) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  */
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
