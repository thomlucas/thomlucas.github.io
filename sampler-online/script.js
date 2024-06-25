function playAudio(imageId, audioId) {
    var audio = document.getElementById(audioId);
    var image = document.getElementById(imageId);
    
    audio.currentTime = 0; // Réinitialiser la position de lecture à 0
    audio.play();

    image.classList.remove('animate');
    // Force reflow to restart the animation
    void image.offsetWidth;
    image.classList.add('animate');

    audio.addEventListener('ended', function() {
        image.classList.remove('animate');
    });
}

document.getElementById('image-1').addEventListener('mousedown', function() {
    playAudio('image-1', 'audio-1');
});

document.getElementById('image-2').addEventListener('mousedown', function() {
    playAudio('image-2', 'audio-2');
});

document.getElementById('image-3').addEventListener('mousedown', function() {
    playAudio('image-3', 'audio-3');
});

document.getElementById('image-4').addEventListener('mousedown', function() {
    playAudio('image-4', 'audio-4');
});

document.getElementById('image-5').addEventListener('mousedown', function() {
    playAudio('image-5', 'audio-5');
});

document.getElementById('image-6').addEventListener('mousedown', function() {
    playAudio('image-6', 'audio-6');
});

document.getElementById('image-7').addEventListener('mousedown', function() {
    playAudio('image-7', 'audio-7');
});

document.getElementById('image-8').addEventListener('mousedown', function() {
    playAudio('image-8', 'audio-8');
});

document.getElementById('image-9').addEventListener('mousedown', function() {
    playAudio('image-9', 'audio-9');
});
