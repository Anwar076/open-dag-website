


// script.js
function toggleVakken() {
    var vakken = document.querySelector('.vakken');
    var button = document.querySelector('button');

    if (!vakken.classList.contains('show')) {
        vakken.classList.add('show');
        button.textContent = 'Verberg Vakken';
    } else {
        vakken.classList.remove('show');
        button.textContent = 'Toon Vakken';
    }
}


