// const text = "hello, my name is john!";
// let index = 0;

// writeText = () => {
//     // document.body.innerText = text.slice(0, index);
//     let letter = text.slice(0, index);
//     const box = document.getElementById("box");
//     box.textContent = letter;
//     index++;

//     index > text.length ? index = 0 : '';
// }

// setInterval(writeText, 100);

const TEXT = "hello, my name is john!";
let index = 0;

writeText = () => {
    document.body.innerText = TEXT.slice(0, index);
    index++;

    index > TEXT.length ? index = 0 : '';
}

setInterval(writeText, 100);



