const createGhost = () => {
    const ghost = document.createElement('img');
    const size = Math.random() * 50 + 80 + 'px';

    let direction = Math.round(Math.random())
    if (direction === 1) {
        ghost.src = './images/leftGhost.png';
        ghost.style.transform = 'translateX(' + Math.random() * 200 + 100 + 'px)';
    } else {
        ghost.src = './images/ghost.png';
        ghost.style.transform = 'translateX(-' + Math.random() * 200 + 100 + 'px)';
    };

    ghost.classList.add('ghost');
    ghost.style.width = size;
    ghost.style.height = size;
    ghost.style.left = Math.random() * 100 + 'vw';
    ghost.style.animationDuration = Math.random() * 2 + 10 +'s';
    
    document.body.appendChild(ghost);

    setTimeout(() => {
        ghost.remove();
    }, 10000);

    ghost.addEventListener("click", () => {
        ghost.remove();
    });
};



setInterval(createGhost, 500);