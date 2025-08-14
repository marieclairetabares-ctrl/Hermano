document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const heartsContainer = document.getElementById('heartsContainer');
    
    // Array of fun messages
    const messages = [
        "You're absolutely amazing! ✨",
        "Your smile brightens my day! ☀️",
        "Sisters like you are rare treasures! 💎",
        "You make the world a better place! 🌍",
        "Hope your day is as wonderful as you are! 🌈",
        "Sending you a big virtual hug! 🤗",
        "You're incredible just the way you are! 💖"
    ];
    
    // Change message when clicked
    messageElement.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        this.textContent = randomMessage;
        
        // Add animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 0.5s';
        }, 10);
    });
    
    // Surprise button functionality
    surpriseBtn.addEventListener('click', function() {
        // Change button text
        this.textContent = "You're awesome! ❤️";
        
        // Create falling hearts
        createHearts();
        
        // Change background
        document.body.style.background = 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
        
        // Add celebration effect
        const title = document.querySelector('.main-title');
        title.textContent = "Sister! You're the BEST! 🎉";
        title.style.animation = 'pulse 1s infinite';
        
        // Add pulse animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    });
    
    // Function to create falling hearts
    function createHearts() {
        const heartCount = 50;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart');
            
            // Random position
            const startLeft = Math.random() * 100;
            heart.style.left = `${startLeft}vw`;
            
            // Random size
            const size = Math.random() * 2 + 1;
            heart.style.fontSize = `${size}rem`;
            
            // Random animation duration
            const duration = Math.random() * 3 + 2;
            heart.style.animationDuration = `${duration}s`;
            
            // Random delay
            const delay = Math.random() * 5;
            heart.style.animationDelay = `${delay}s`;
            
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, (duration + delay) * 1000);
        }
    }
    
    // Add floating animation to balloons on hover
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseover', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float 0.5s infinite ease-in-out';
            }, 10);
        });
    });
});