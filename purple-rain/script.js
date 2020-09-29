const createGhost = () => {
    const ghost = document.createElement('div');
    ghost.classList.add('ghost');

    ghost.style.left = Math.random() * 100 + 'vw';
    ghost.style.animationDuration = Math.random() * 2 + 5 +'s';
    ghost.style.fontSize = Math.random() * 8 + 2 + "rem";

    ghost.innerText = '👻';

    document.body.appendChild(ghost);

    setTimeout(() => {
        ghost.remove();
    }, 10000);
}

setInterval(createGhost, 500);