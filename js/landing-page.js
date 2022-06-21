const menu = document.querySelector('.menu')
const links = document.querySelector('.nav-links')
// highlight active tab:
const currentUrl = window.location.href
if(currentUrl.match('kontakt')){
   links.children[3].children[0].classList.add('nav-link-active')    
} else if (currentUrl.match('galeria')){
     links.children[2].children[0].classList.add('nav-link-active')
} else if (currentUrl.match('lokalizacja')){
     links.children[1].children[0].classList.add('nav-link-active')
} else if (currentUrl.match('charakterystyka')){
     links.children[0].children[0].classList.add('nav-link-active')
}

menu?.addEventListener('click', e=>{
    togglelinks()
})
function togglelinks(){
    links.classList.toggle('hide-links')
}
window.addEventListener('resize', ()=>{
    if(window.innerWidth < 700){
        
        links?.classList.remove('hide-links')
    }
    
});