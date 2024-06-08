document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', function() {
            alert('The adventure begins!');
        });
    }
});
