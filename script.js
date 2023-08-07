const numStars = 100;
const starContainer = document.querySelector('.star-container');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 6 + 4}s`;
    starContainer.appendChild(star);
}
// script.js
function toggleVideo(index) {
    const videos = document.querySelectorAll('.video-item video');
    const expandedVideo = document.querySelector('.expanded-video');

    if (expandedVideo) {
        expandedVideo.remove();
        return;
    }

    const video = videos[index].cloneNode(true);
    video.controls = true;

    const expandedContainer = document.createElement('div');
    expandedContainer.classList.add('expanded-video');
    expandedContainer.appendChild(video);

    document.body.appendChild(expandedContainer);
}
