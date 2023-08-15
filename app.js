const hex__numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function generateHexCode() {
    let hexCode = [];

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        hexCode.push(hex__numbers[randomNumber]);
    }
    return hexCode.join('');
}

function changeColor() {
    let hexCode = `#${generateHexCode()}`;
    let hexCodeHTML = document.querySelector('#hex-code');

    document.body.style.background = hexCode;
    hexCodeHTML.innerText = hexCode;

}
