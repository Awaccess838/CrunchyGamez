document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        console.log(`Link clicked: ${this.href}`);
        // Additional functionality can be added here
    });
});
