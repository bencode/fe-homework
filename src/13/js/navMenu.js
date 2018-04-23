const menu=document.querySelector('.menu');
const items=menu.querySelectorAll('.item');
const itemsLength=items.length;
for( var i=0; i<itemsLength; i++){
    getAtive(i);
}
function getAtive(index){
    items[index].addEventListener('click',function(){
        for( var j=0; j<itemsLength; j++){
            items[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}