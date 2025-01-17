// Select elements
const openDialogButtons = document.querySelectorAll('.openDialog');
const closeDialog = document.getElementById('closeDialog');
const videoDialog = document.getElementById('videoDialog');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Function to open dialog and set video source
openDialogButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.getAttribute('data-video'); // Get video source from data attribute
    videoSource.src = videoSrc; // Set video source
    videoPlayer.load(); // Reload the video
    videoDialog.style.display = 'flex'; // Show dialog
    videoPlayer.play(); // Play video
  });
});

// Close dialog and reset video
closeDialog.addEventListener('click', () => {
  videoDialog.style.display = 'none';
  videoPlayer.pause();
  videoPlayer.currentTime = 0; // Reset video
});

// Close dialog when clicking outside the content
videoDialog.addEventListener('click', (event) => {
  if (event.target === videoDialog) {
    videoDialog.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
