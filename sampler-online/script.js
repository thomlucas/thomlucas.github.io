document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez toutes les images dans les containers
    var images = document.querySelectorAll('.container img');

    // Pour chaque image, ajoutez un gestionnaire d'événement de clic
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            // Récupérez l'id de l'image cliquée (par exemple, 'image-1' -> 'audio-1')
            var imageId = this.id; // 'image-1', 'image-2', etc.
            var audioId = 'audio-' + imageId.split('-')[1]; // 'audio-1', 'audio-2', etc.

            // Sélectionnez l'élément audio correspondant
            var audio = document.getElementById(audioId);

            // Vérifiez si l'audio est défini et prêt à être lu
            if (audio) {
                // Réinitialisez l'audio pour le rejouer à partir du début
                audio.currentTime = 0;
                // Jouez le son
                audio.play();
            }
        });
    });
});