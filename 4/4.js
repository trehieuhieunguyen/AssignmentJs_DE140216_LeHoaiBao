let div = document.getElementById('div');

document.getElementById('tr').addEventListener('click', function() {
    div.style.top = '0px';
    div.style.right = '0px';
    div.style.bottom = 'auto';
    div.style.left = 'auto';
});

document.getElementById('bl').addEventListener('click', function() {
    div.style.top = 'auto';
    div.style.right = 'auto';
    div.style.bottom = '0px';
    div.style.left = '0px';
});

document.getElementById('br').addEventListener('click', function() {
    div.style.top = 'auto';
    div.style.left = 'auto';
    div.style.bottom = '0px';
    div.style.right = '0px';
});