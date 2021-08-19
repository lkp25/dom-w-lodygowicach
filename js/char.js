const paragraphs = [...document.querySelectorAll('.description')]

document.addEventListener('scroll', e=>{
    console.log(window.scrollY);
    const currentElement = paragraphs.find(p => p.offsetTop <  window.innerHeight - p.getBoundingClientRect().top && !p.classList.contains('show-text'))
    if(!currentElement){
        return
    }
    if(currentElement.classList.contains('show-text')){
        return
    }
    currentElement.classList.add('show-text')
})