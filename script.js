$(document).ready(function() {
    // Start the progress animation for each rectangle
    $('.green').each(function(index) {
        animateProgress($(this));
    });
});

function animateProgress(progressBar) {
    let width = 0;
    let key = setInterval(function () {
        width++;
        progressBar.css('width', `${width}%`);
        if (width >= 100) {
            clearInterval(key);
            progressBar.css('background-color', 'green'); // Change color to green when progress is complete
        }
    }, 30);
}