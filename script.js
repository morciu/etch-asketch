// Buttons
const clearButton = document.querySelector("#clearButton");
const colorsButton = document.querySelector("#colorsButton");

// Default Color
let color = 'rgb(0, 0, 0)';

// Toggle Wacky Colors - random rgb values
let wackyColors = false;

// Get canvas area
let canvas = document.querySelector("#canvas");

// Set up canvas size
let canvasH = 16;
let canvasW = 16;

// Loop 16x16 times and create a 16x16 grid on the canvas

createNewCanvas(canvasH, canvasW);

// Set event to clear canvas on clearButton and ask for new canvas size (max 100)
clearButton.addEventListener('click', () => {
    let pixels = document.querySelectorAll(".coloredPixel");

    pixels.forEach((pixel) => {
        pixel.classList = "blankPixel";
    });

    let newCanvas = document.createElement("div");
    newCanvas.id = "canvas";

    // ask for new size using a prompt
    let newSize;
    do {
        newSize = parseInt(prompt("Set pixel size (max 100):"));    
    }
    while (Number.isNaN(newSize) || ((newSize > 100) || (newSize < 1)))
    

    canvasH = parseInt(newSize);
    canvasW = parseInt(newSize);

    document.querySelector(".mid-center").replaceChild(newCanvas, document.querySelector("#canvas"));
    createNewCanvas(canvasH, canvasW);

})

// Set event to toggle Wacky Colors button on or off
colorsButton.addEventListener('click', () => {
    if (wackyColors) {
        wackyColors = false;
        colorsButton.style = "background-color: #DA4167;";
    }
    else {
        wackyColors = true;
        colorsButton.style = "background-color: #A8D0DB;";
    }
})


function clearCanvasGrid() {
    let canvasPixels = document.querySelector("#canvas").childNodes;
    canvasPixels.forEach((pixel) => {
        pixel.remove();
    })
}

function createNewCanvas(height, width) {
    for (let i = 0; i < canvasH; i++) {
        // Create rows
        let canvasRow = document.createElement("div");
        canvasRow.style = `display: flex;`;
        canvasRow.classList = "pixelRow"
    
        // Create pixels
        for (let j = 0; j < canvasW; j++) {
            let pixel = document.createElement("div");
            pixel.classList = "blankPixel pixel"
    
            // Set up a mouse-over (hover) effect to make the pixel change color
            pixel.addEventListener('mouseover', () => {
                pixel.classList = "coloredPixel pixel";
                // If wacky colors is on - generate random rgb values, else use black
                if (wackyColors) {
                    color = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`
                }
                else {
                    color = 'rgb(0, 0, 0)';    
                }
                pixel.style = `background-color: ${color}`;
            })
    
            canvasRow.appendChild(pixel);
        }
        document.querySelector("#canvas").appendChild(canvasRow);
    }
}

function randomRgbValue() {
    return Math.floor(Math.random() * 255);
}