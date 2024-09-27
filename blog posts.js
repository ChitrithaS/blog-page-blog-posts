// script.js

// Function to toggle visibility of blog post summaries
function toggleSummary(event) {
    const summary = event.target.nextElementSibling;
    if (summary.style.display === "none" || summary.style.display === "") {
        summary.style.display = "block";
        event.target.textContent = "Read less...";
    } else {
        summary.style.display = "none";
        event.target.textContent = "Read more...";
    }
}

// Attach event listeners to "Read more..." links
document.querySelectorAll('article a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleSummary(event);
    });
});