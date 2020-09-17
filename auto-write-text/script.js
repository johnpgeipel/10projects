const text = "hello, my name is john!";
let index = 0;

writeText = () => {
    document.body.innerText = text.slice(0, index);
    index++;

    index > text.length ? index = 0 : '';
}

setInterval(writeText, 100);
