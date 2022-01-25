// Color
let color = 'black';

// Get canvas area
const canvas = document.querySelector("#canvas");

// Set up canvas size
let canvasH = 16;
let canvasW = 16;

// Loop 16x16 times and create a 16x16 grid on the canvas

for (let i = 0; i < canvasH; i++) {
    // Create rows
    let canvasRow = document.createElement("div");
    canvasRow.style = `height: ${canvasH}%; width 100%; border: 1px solid black; display: flex;`;
    canvasRow.classList = "pixelRow"

    // Create pixels
    for (let j = 0; j < canvasW; j++) {
        let pixel = document.createElement("div");
        pixel.style = `height: 100%; width: ${canvasW}%; border: 1px solid black;`;
        pixel.classList = "blankPixel"

        // Set up a mouse-over (hover) effect to make the pixel change color
        pixel.addEventListener('mouseover', () => {
            pixel.classList = "coloredPixel";
        })

        canvasRow.appendChild(pixel);
    }
    canvas.appendChild(canvasRow);
}