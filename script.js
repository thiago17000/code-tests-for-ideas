let isModeActive = false;
let intervalId = null;

// Ensure the DOM is fully loaded before looking for elements
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-scare');
    const overlay = document.getElementById('jumpscare-overlay');
    const audio = document.getElementById('scream-audio');

    if (!toggleBtn || !overlay || !audio) {
        console.error("Error: Check your IDs in index.html!");
        return;
    }

    toggleBtn.addEventListener('click', () => {
        isModeActive = !isModeActive;
        
        if (isModeActive) {
            toggleBtn.innerText = "Disable Jumpscare Mode";
            toggleBtn.classList.add('active');
            
            // Start the check
            intervalId = setInterval(() => {
                // 1 in 100 chance
                if (Math.floor(Math.random() * 10000) === 0) {
                    triggerJumpscare(overlay, audio);
                }
            }, 5000); 
            
        } else {
            toggleBtn.innerText = "Enable Jumpscare Mode";
            toggleBtn.classList.remove('active');
            clearInterval(intervalId);
        }
    });
});

function triggerJumpscare(overlay, audio) {
    console.log("Jumpscare triggered!");
    
    // Show the overlay
    overlay.classList.remove('hidden');
    
    // Force audio to play
    audio.currentTime = 0; // Reset audio to start
    audio.play().catch(error => {
        console.warn("Audio blocked by browser, click the page to enable interaction.", error);
    });
    
    // Hide after 3 seconds
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);
}
