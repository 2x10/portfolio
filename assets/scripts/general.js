function adjustLayout() {
    const mainDiv = document.querySelector('.main-div');
    if (window.innerWidth >= 900) 
    { 
        mainDiv.style.width = '75%';
    } 
    else 
    {
        mainDiv.style.width = '100%';
    }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);