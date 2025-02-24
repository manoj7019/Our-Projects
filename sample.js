
document.getElementById('two').style.display = 'none';

document.getElementById('btn1').addEventListener('click', () => {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'block';
})

document.getElementById('btn2').addEventListener('click', () => {
    document.getElementById('two').style.display = 'none';
    document.getElementById('one').style.display = 'block';
})