const menu = document.querySelector('.menu')
const links = document.querySelector('.nav-links')

menu.addEventListener('click', e=>{
    togglelinks()
})
function togglelinks(){
    links.classList.toggle('hide-links')
}
window.addEventListener('resize', ()=>{
    if(window.innerWidth < 700){
        
        links.classList.add('hide-links')
    }
    
});