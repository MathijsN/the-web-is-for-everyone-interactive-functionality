const viewButtons = document.querySelectorAll('.view-selection ul li button')
const grid = document.getElementById('grid')

viewButtons.forEach((button) => {
    button.addEventListener('click', ev => {

        const currentID = ev.target.id

        viewButtons.forEach(button => {
            button.className = ''
        })

        if (currentID === 'XLarge') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-Xlarge")

            ev.target.classList.add("active-view")
        }
        if (currentID === 'Large') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-large")

            ev.target.classList.add("active-view")
        }
        if (currentID === 'Medium') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-medium")

            ev.target.classList.add("active-view")
        }
        if (currentID === 'Small') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-small")

            ev.target.classList.add("active-view")
        }
        if (currentID === 'List') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-list")

            ev.target.classList.add("active-view")
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
