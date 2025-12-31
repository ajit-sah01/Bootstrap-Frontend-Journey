function genCode() {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexDigits.length);
        hexColor += hexDigits[randomIndex];
    }
    return hexColor;
}


function swatcher() {
    const box = document.getElementById('box')

    let genColor = genCode()

    box.style.backgroundColor = genColor
}