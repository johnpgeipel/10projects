const createGhost = () => {
    const ghost = document.createElement('img');
    const size = Math.random() * 80 + 80 + 'px';

    let direction = Math.round(Math.random())
    if (direction === 1) {
        ghost.style.transform = 'translateX(-200px)';
    } else {
        ghost.style.transform = 'translateX(200px)';
    };

    ghost.classList.add('ghost');
    ghost.src = './images/ghost.png';
    ghost.style.width = size;
    ghost.style.height = size;
    ghost.style.left = Math.random() * 100 + 'vw';
    ghost.style.animationDuration = Math.random() * 2 + 5 +'s';
    
    document.body.appendChild(ghost);

    setTimeout(() => {
        ghost.remove();
    }, 10000);
};

setInterval(createGhost, 500);