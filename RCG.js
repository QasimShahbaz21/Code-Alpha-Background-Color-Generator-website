document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const generateButton = document.getElementById("generate");
    const customColorInput = document.getElementById("custom-color");
    const copyButton = document.getElementById("copyColorCode");

    // Function to generate a random background color
    function generateRandomBackgroundColor() {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        body.style.backgroundColor = randomColor;
        customColorInput.value = randomColor;
    }

    function copycolorcode(){
        customColorInput.select();
        document.execCommand("copy");
        alert("Color code copied to clipboard: " + customColorInput.value);
    }

    generateButton.addEventListener("click", generateRandomBackgroundColor);
    copyButton.addEventListener("click", copycolorcode);

    generateRandomBackgroundColor();
});