const numStars = 100;
const starContainer = document.querySelector('.star-container');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 6 + 4}s`;
    starContainer.appendChild(star);
}