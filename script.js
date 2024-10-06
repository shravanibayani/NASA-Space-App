const btn_play = document.querySelector(".btn-play");

btn_play.addEventListener("click", () => {
    // Trigger fade-out first
    transition_link();

    // Wait for the fade-out to complete before changing the video
    setTimeout(() => {
        // Replace only the video element, not the entire body
        const videoContainer = document.querySelector('.video-container');
        videoContainer.innerHTML = `
        
            <video autoplay id="background-video">
                <source src="Nasa_intro.mp4" type="video/mp4">
            </video>
        
        `;
        // Optionally, remove the fade-out class after the transition completes
        document.body.classList.remove('fade-out');

        // Once the first video is done playing, replace it with the second video
        const nasaVideo = document.querySelector('#background-video');
        nasaVideo.addEventListener('ended', () => {
            // When the first video ends, transition to the next video
            transition_link();
            document.body.innerHTML=`
            <video autoplay muted loop id="background-video">
            <source src=stars_background.mp4 type="video/mp4">
        </video>
        <video autoplay muted loop id="small-video">
        <source src="NasaVideo2.mp4" type="video/mp4">
    </video>
        <div id="main">
        <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div></div>
<div class="symphony-btn" role="alert">
  Symphony related to JWST images
</div>
    `
        }, 500); // Matching this delay with the fade-out CSS duration

        });
    }, 500); // Match this with your fade-out CSS duration

    

    
// Transition function
function transition_link() {
    // Add a 'fade-out' class to the body to trigger the CSS transition
    document.body.classList.add('fade-out');

    // Set a timeout to wait for the fade-out animation to complete before proceeding
    setTimeout(() => {
        // Remove fade-out after it's done
        document.body.classList.remove('fade-out');
    }, 1000); // The timeout should match the duration of the CSS transition
}
