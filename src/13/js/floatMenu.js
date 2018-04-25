initUserChange();

function initUserChange() {
    const content=document.querySelector('.content');
    const nav=content.querySelector('.nav');
    
    // 可以使用箭头函数哦
    nav.addEventListener('click',()=>{
        const flag=content.classList.contains('active');
        // if (flag) {
        //     content.classList.remove('active');
        // }else {
        //     content.classList.add('active');
        // }
        // 上面也可以写成，你不是让我教你高级的写法吗？哈哈
        content.classList[flag ? 'remove' : 'add']('active');
    });
}