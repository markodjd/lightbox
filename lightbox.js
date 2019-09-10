const images = document.querySelectorAll(".images img");
const body = document.querySelector("body");

// Create main-frame element (fixed semi-transparent background)

const frameMain = document.createElement("div");
frameMain.className = "main-frame";
body.appendChild(frameMain);

// Create frame-window where image element will be placed

const frameWindow = document.createElement("div");
frameWindow.className = "frame";
frameMain.appendChild(frameWindow);

// Create an empty image element inside the frame-window

const frameImg = document.createElement("img");
frameWindow.appendChild(frameImg);

// Create previous button

const prev = document.createElement("button");
prev.id = "prev";
frameWindow.appendChild(prev);

// Create next button

const next = document.createElement("button");
next.id = "next";
frameWindow.appendChild(next);

// Arrow icon on next button

const right = document.createElement("img");
right.id = "right";
right.src = "./images/right.svg"; // Change path to where images are placed
next.appendChild(right);

// Arrow icon on previous button

const left = document.createElement("img");
left.id = "left";
left.src = "./images/left.svg"; // Change path to where images are placed
prev.appendChild(left);

// Create "X" button

const close = document.createElement("button");
close.id = "close";
close.innerText = "X";
frameMain.appendChild(close);

// Open lightbox

images.forEach(img =>
  img.addEventListener("click", function(e) {
    frameImg.src = e.target.src;
    frameMain.style.display = "block";
    close.style.opacity = "1";

    // Fetching clicked image index

    var imgArray = Array.from(images);
    var i = imgArray.indexOf(e.target);

    // Next button function

    next.addEventListener("click", function() {
      if (i < imgArray.length - 1) {
        frameImg.src = imgArray[i + 1].src;
        i++;
      } else {
        i = 0;
        frameImg.src = imgArray[i].src;
      }
      close.style.opacity = "1";
    });

    // Previous button function

    prev.addEventListener("click", function() {
      if (i > 0) {
        frameImg.src = imgArray[i - 1].src;
        i--;
      } else {
        i = imgArray.length - 1;
        frameImg.src = imgArray[i].src;
      }
      close.style.opacity = "1";
    });
  })
);

// Closing lightbox

frameMain.addEventListener("click", function() {
  frameMain.style.display = "none";
});

close.addEventListener("click", function() {
  frameMain.style.display = "none";
});

// Preventing closing of lightbox if clicked on the image frame and toggling "X" button

frameWindow.addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (close.style.opacity === "0" && close.style.pointerEvents === "none") {
      close.style.opacity = "1";
      close.style.pointerEvents = "all";
    } else {
      close.style.opacity = "0";
      close.style.pointerEvents = "none";
    }
  },
  false
);
