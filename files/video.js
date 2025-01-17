// Select elements
const openDialog = document.getElementById('openDialog');
const closeDialog = document.getElementById('closeDialog');
const videoDialog = document.getElementById('videoDialog');
const videoPlayer = document.getElementById('videoPlayer');

// Open dialog and play video
openDialog.addEventListener('click', () => {
  videoDialog.style.display = 'flex';
  videoPlayer.play();
});

// Close dialog and pause video
closeDialog.addEventListener('click', () => {
  videoDialog.style.display = 'none';
  videoPlayer.pause();
  videoPlayer.currentTime = 0; // Reset video to start
});

// Close dialog when clicking outside the content
videoDialog.addEventListener('click', (event) => {
  if (event.target === videoDialog) {
    videoDialog.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
});

