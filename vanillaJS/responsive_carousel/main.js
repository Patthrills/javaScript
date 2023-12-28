const slider = document.querySelector('.slider');

document.addEventListener('click', (e)=>{
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1])
})