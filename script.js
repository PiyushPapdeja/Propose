var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error("Failed to send email");
          button.textContent = "Error 😞";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Heyy Bluee 💙 ",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 100 && frameNumber < 200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Heyy Bluee 💙 ",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 200) {
    opacity = 0;
  }
  if (frameNumber > 200 && frameNumber < 350) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 350) {
      drawTextWithLineBreaks(
        ["I know I'm not the best at expressing my feelings", "but I'll try"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I know I'm not the best at expressing my feelings, but I'll try",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 350 && frameNumber < 500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["I know I'm not the best at expressing my feelings", "but I'll try"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I know I'm not the best at expressing my feelings, but I'll try",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 500) {
    opacity = 0;
  }
  if (frameNumber > 500 && frameNumber < 700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I still can't believe how lucky I am and which god I prayed to get you in my life!",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 700 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I still can't believe how lucky I am and which god I prayed to get you in my life!",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 900) {
    opacity = 0;
  }
  if (frameNumber > 900 && frameNumber < 1025) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I feel as if I've won the lottery of life",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1025 && frameNumber < 1150) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I feel as if I've won the lottery of life",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1150) {
    opacity = 0;
  }
  if (frameNumber > 1150 && frameNumber < 1300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I asked you on a call" , "but I know you deserve better proposal...", 
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I asked you on a call, but I know you deserve better proposal...",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1300 && frameNumber < 1450) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I asked you on a call" , "but I know you deserve better proposal...",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I asked you on a call, but I know you deserve better proposal...",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber == 1450) {
    opacity = 0;
  }
  if (frameNumber > 1450 && frameNumber <  2200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I wanted to celebrate this special day with you",
          "and tell you how much you mean to me",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I wanted to celebrate this special day with you and tell you how much you mean to me",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 1750 && frameNumber < 2200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "But I know that this is for the best","so this is my way of saying I love you", 
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "But I know that this is for the best, so this is my way of saying I love you",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }
    opacity = opacity + 0.01;
  }
  if (frameNumber == 2200) {
    opacity = 0;
  }
  if (frameNumber > 2200 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "You are not just my love, you are my everything",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2400 && frameNumber < 2600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "You are not just my love, you are my everything",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2600) {
    opacity = 0;
  }
  if (frameNumber > 2600 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "You are my best friend, my gossip buddy, my partner in crime, my eating buddy",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "You are my best friend, my gossip buddy, my partner in crime, my eating buddy",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2800 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "my travel partner, my go-to person ,my secret keeper", 
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "my travel partner, my go-to person ,my secret keeper",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber == 3300) {
    opacity = 0;
  }
  if (frameNumber > 3300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    context.fillText(
      "I can't imagine my life without you, I love you blue 💙",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 3500 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I can't imagine my life without you, I love you blue 💙",
      canvas.width / 2,
      canvas.height / 2
    );
  }
  if (frameNumber >= 3700 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "Will you be my valentine? ♥️",
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
