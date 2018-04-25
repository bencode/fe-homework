const menu=document.querySelector('.menu');
const items=menu.querySelectorAll('.item');
const itemsLength=items.length;

for( let i=0; i<itemsLength; i++){
    items[i].addEventListener('click',()=>{
        items.forEach((item)=>{ item.classList.remove('active');} );
        items[i].classList.add('active');
    });    
}

// 上面的实现的很好，呵呵，主要是为了解决作用域问题，如果使用ES6，是可以直接在for语句里写事件绑定的。
// 因为let和const是块作用域的。
// 或者可以使用forEach也能解决这个问题，比如:

// items.forEach(item => {
//   item.addEventListener('click', () => {
//     items.forEach(thisitem => thisitem.classList.remove('active'));
//     item.classList.add('active');
//   });
// });