const moveImage = () => {
    let div = document.getElementById('div');
    const sizeChange = 10;
    
    setInterval(() => {
        let currentTop = div.offsetTop;
        let currentRight = window.innerWidth - (div.offsetLeft + div.offsetWidth);;
        div.style.top = currentTop + sizeChange + 'px';
        div.style.right = currentRight + sizeChange + 'px'
    }, 1000);
}

