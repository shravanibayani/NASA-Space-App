const sv = document.querySelector('.small-video-container');
    sv.addEventListener('click', function() {
        const mainBlock = document.querySelector('#main'); // Select the main block
        
        if (this.classList.contains('img_animation')) {
            // Remove the 'center-video' class to move video back to its original position
            this.classList.remove('img_animation');
            this.classList.add('hide-circles');
            
            // Slowly show the main block by removing the 'hidden' class
            mainBlock.classList.remove('hidden');
        } else {
            // Add the 'center-video' class to move video to the center
            this.classList.add('img_animation');
            this.classList.remove('hide-circles');
            
            // Slowly hide the main block by adding the 'hidden' class
            mainBlock.classList.add('hidden');
    }
    });