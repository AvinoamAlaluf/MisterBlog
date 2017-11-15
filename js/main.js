
function toggleMenu(){
    document.querySelector('nav > ul').classList.toggle('full-height');
    document.querySelector('.black-bg').classList.toggle('full-height');
   setTimeout(function(){
    document.querySelector('nav > ul').classList.toggle('hidden-collapsed');        
    document.querySelector('nav').classList.toggle('full-height');
    
   },400);
}