
document.addEventListener('DOMContentLoaded', function () {
    const rosa = document.getElementById('rosa');
    const poema = document.getElementById('poema');
    const musica = document.getElementById('musica');
    
    rosa.addEventListener('click', () => {
        rosa.src = 'rosa-aberta.jpg';
        poema.classList.remove('hidden');
        poema.classList.add('show');
        musica.play().catch(() => {
            alert("Clique para permitir o som 💖");
        });
    });
});
