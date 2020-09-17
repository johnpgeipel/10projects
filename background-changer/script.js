const BTN = document.getElementById('btn');

BTN.addEventListener('click', () => {
    document.body.style.background = randomBg();
})

 randomBg = () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};