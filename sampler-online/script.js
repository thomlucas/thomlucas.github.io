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

    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
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

        if (isTouchDevice()) {
            image.addEventListener('touchstart', handleInteraction);
        } else {
            image.addEventListener('mousedown', handleInteraction);
        }
    });
});
