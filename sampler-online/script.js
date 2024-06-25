document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    function playAudioAndAnimate(image, audio) {
        audio.currentTime = 0;
        audio.play();

        image.classList.remove('animate');
        void image.offsetWidth;
        image.classList.add('animate');

        audio.addEventListener('ended', function() {
            image.classList.remove('animate');
        });
    }

    containers.forEach(function(container) {
        const image = container.querySelector('img');
        const audioId = image.id.replace('image-', 'audio-');
        
        function handleInteraction() {
            const audio = document.getElementById(audioId);
            if (audio) {
                playAudioAndAnimate(image, audio);
            }
        }
        
        // Support both mouse and touch interactions
        image.addEventListener('mousedown', handleInteraction);
        image.addEventListener('touchstart', handleInteraction);
    });
});
