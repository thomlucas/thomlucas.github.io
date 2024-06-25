document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les éléments container
    const containers = document.querySelectorAll('.container');

    // Fonction pour jouer l'audio et démarrer l'animation
    function playAudioAndAnimate(image, audio) {
        audio.currentTime = 0; // Réinitialiser la position de lecture à 0
        audio.play();
        
        image.classList.remove('animate');
        // Force reflow pour redémarrer l'animation
        void image.offsetWidth;
        image.classList.add('animate');
        
        // Écouter l'événement de fin de lecture pour arrêter l'animation
        audio.addEventListener('ended', function() {
            image.classList.remove('animate');
        });
    }

    // Attacher un gestionnaire d'événement à chaque image
    containers.forEach(function(container) {
        const image = container.querySelector('img');
        const audioId = image.id.replace('image-', 'audio-'); // Dérive l'id de l'audio
        
        image.addEventListener('mousedown', function() {
            const audio = document.getElementById(audioId);
            if (audio) {
                playAudioAndAnimate(image, audio);
            }
        });
    });
});
