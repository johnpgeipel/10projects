let scoreNum = 0;

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
    ghost.style.left = Math.random() * 75 + 'vw';
    ghost.style.animationDuration = Math.random() * 2 + 10 +'s';
    
    document.body.appendChild(ghost);

    ghost.addEventListener("click", () => {
        ghost.remove();
        const score = document.getElementById("headerScore");
        scoreNum++;
        console.log(scoreNum);
        score.innerHTML = "<div>score: " + scoreNum + "</div>";
    });

    if (scoreNum >= 10 && scoreNum < 20) {
        ghost.style.animationDuration = Math.random() * 2 + 5 + 's';
    } else if (scoreNum >= 20 && scoreNum < 30) {
        ghost.style.animationDuration = Math.random() * 2 + 3 + 's';
    } else if (scoreNum >= 30 && scoreNum < 40){
        ghost.style.animationDuration = Math.random() * 2 + 2 + 's';
    } else if (scoreNum >= 40 && scoreNum < 50) {
        ghost.style.animationDuration = Math.random() * 2 + 1 + 's';
    } else if (scoreNum > 50) {
        ghost.style.animationDuration = Math.random() * 2 + 's';
    }

    setTimeout(() => {
        ghost.remove();
    }, 10000);
};



setInterval(createGhost, 500);