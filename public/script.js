
document.getElementById('file').onchange = function (evt) {
    const [file] = this.files;
    if (file) {
        const preview = document.querySelector('.image-preview');
        const svg = document.querySelector('.picture-icon');

        // Set the src of the image to the local file path
        preview.src = URL.createObjectURL(file);

        // Show the image and hide the SVG icon
        preview.style.display = 'block';
        svg.style.display = 'none';
    }
};