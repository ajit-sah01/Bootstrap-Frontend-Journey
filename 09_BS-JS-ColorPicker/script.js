function colorPicker() {
    const incode = document.getElementById('incode').value 
    document.getElementById('codeValue').innerText=incode
    document.getElementById('box').style.backgroundColor=incode
}