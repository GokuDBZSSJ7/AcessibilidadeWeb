const btn = document.getElementById('HighContrastButton');
const btn2 = document.getElementById('ZoomInButton');
const btn1 = document.getElementById('ZoomOutButton');
const content = document.getElementById('content');

btn.addEventListener('click',  ()  => {
    document.querySelector('body').classList.toggle('high-contrast');
});
const zoomAtual = "100%";
btn2.addEventListener('click', ()  => {
    const currentSize =  parseInt(window.getComputedStyle(content).fontSize);
    content.style.fontSize = (currentSize +  2) + 'px';
})
btn1.addEventListener('click', ()  => {
    const currentSize =  parseInt(window.getComputedStyle(content).fontSize);
    content.style.fontSize = (currentSize -  2) + 'px';
})