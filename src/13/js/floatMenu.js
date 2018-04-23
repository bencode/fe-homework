initUserChange();

function initUserChange() {
    const content=document.querySelector('.content');
    const nav=content.querySelector('.nav');
    
    nav.addEventListener('click',function () {
        const flag=content.classList.contains('active');
        if (flag) {
            content.classList.remove('active');
        }else {
            content.classList.add('active');
        }
    });
}