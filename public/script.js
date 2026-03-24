const viewButtons = document.querySelectorAll('.view-selection ul li button')
const grid = document.getElementById('grid')

viewButtons.forEach((button) => {
    button.addEventListener('click', ev => {

        const currentID = ev.target.id

        if (currentID === 'XLarge') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-Xlarge")
        }
        if (currentID === 'Large') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-large")
        }
        if (currentID === 'Medium') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-medium")
        }
        if (currentID === 'Small') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-small")
        }
        if (currentID === 'List') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-list")
        }
    })
})


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
