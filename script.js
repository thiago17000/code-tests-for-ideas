function triggerJumpscare() {
    const overlay = document.getElementById('jumpscare-overlay');
    const audio = document.getElementById('scream-audio');
    
    overlay.classList.remove('hidden'); // Show the image
    audio.play(); // Play the sound
    
    // Optional: Hide it again after 3 seconds
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);
}

// Logic: Check every 5 seconds to be less resource-heavy
setInterval(() => {
    // Math.random() gives 0 to 0.999...
    // Multiplying by 10000 gives 0 to 9999.99
    if (Math.floor(Math.random() * 10000) === 0) {
        triggerJumpscare();
    }
}, 5000);
