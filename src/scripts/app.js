// This file contains the JavaScript code for the mobile app.
// It handles the functionality of the buttons (refresh, undo, and homepage)
// and manages the display of the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const undoButton = document.getElementById('undo');
    const refreshButton = document.getElementById('refresh');
    const homeButton = document.getElementById('home');
    const webView = document.getElementById('webview');

    let history = [];
    let currentIndex = -1;

    function loadPage(url) {
        webView.src = url;
        if (currentIndex < history.length - 1) {
            history = history.slice(0, currentIndex + 1);
        }
        history.push(url);
        currentIndex++;
    }

    undoButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            webView.src = history[currentIndex];
        }
    });

    refreshButton.addEventListener('click', () => {
        if (currentIndex >= 0) {
            webView.src = history[currentIndex];
        }
    });

    homeButton.addEventListener('click', () => {
        loadPage('https://google-tv-browser.vercel.app/'); // Replace with your homepage URL
    });

    // Load the initial page
    loadPage('https://www.example.com'); // Replace with your initial page URL
});
