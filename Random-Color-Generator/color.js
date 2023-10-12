// Function to generate a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color and convert to HEX and HSL
function generateRandomColor() {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);

  // Convert RGB to HEX
  const hexColor = `#${(1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1).toUpperCase()}`;

  // Convert RGB to HSL
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let luminance = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation = luminance > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        hue = ((b - r) / delta + 2) * 60;
        break;
      case b:
        hue = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  hue = Math.round(hue);
  saturation = Math.round(saturation * 100);
  luminance = Math.round(luminance * 100);

  const hslColor = `hsl(${hue}, ${saturation}%, ${luminance}%)`;

  return {
    rgb: `rgb(${red}, ${green}, ${blue})`,
    hex: hexColor,
    hsl: hslColor,
  };
}

// Function to display the generated color codes
function displayRandomColorCodes() {
  const colorBox = document.getElementById('colorBox');
  const randomColor = generateRandomColor();
  body = document.body;

  document.body.style.backgroundColor = randomColor.rgb;
  colorBox.innerHTML = `
    <p>RGB: ${randomColor.rgb}</p>
    <p>HEX: ${randomColor.hex}</p>
    <p>HSL: ${randomColor.hsl}</p>
  `;
}

// Event listener for the button click
randomColor = document.getElementById('randomColor');
randomColor.addEventListener('click', displayRandomColorCodes);

// Initial display
displayRandomColorCodes();
