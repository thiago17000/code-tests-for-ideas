let isModeActive = false;
let intervalId = null;

const toggleBtn = document.getElementById('toggle-scare');

toggleBtn.addEventListener('click', () => {
    isModeActive = !isModeActive;
    
    if (isModeActive) {
        toggleBtn.innerText = "Disable Jumpscare Mode";
        toggleBtn.classList.add('active');
        
        // Start the check
        intervalId = setInterval(() => {
            if (Math.floor(Math.random() * 10000) === 0) {
                triggerJumpscare();
            }
        }, 5000); 
        
    } else {
        toggleBtn.innerText = "Enable Jumpscare Mode";
        toggleBtn.classList.remove('active');
        clearInterval(intervalId); // Stop the check
    }
});

function triggerJumpscare() {
    const overlay = document.getElementById('jumpscare-overlay');
    const audio = document.getElementById('scream-audio');
    
    overlay.classList.remove('hidden');
    audio.play();
    
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);
}
