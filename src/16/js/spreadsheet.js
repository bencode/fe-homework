const table=document.querySelector('.table');
const tBody=table.querySelector('tbody');
const btns=document.querySelector('.btn');
const addtr=btns.querySelector('.addtrbtn');
const addth=btns.querySelector('.addthbtn');

app(tBody,'click','.cell',function(){
    this.classList.add('focus');
    this.innerHTML='<div class="ui fluid icon input"><input type="text" class="input-cell"></div>';
    const inputCell=table.querySelector('.input-cell');
    inputCell.focus();
});

app(tBody,'focusout','.input-cell',function(){
    this.parentNode.parentNode.classList.remove('focus');
    const ancestor=this.parentNode.parentNode;
    if(!(/\s/.test(this.value))){
        ancestor.innerHTML=this.value;
    }
    else{
        ancestor.innerHTML='';
    }
    
});

function app(parentNode,eventType,node,fn){
    parentNode.addEventListener(eventType,(event)=>{
        if(event.target.matches(node)){
            fn.apply(event.target,arguments);
        }
    });
}

//增加行
//tbody包括几个tr
//tr包括几个td,包括几个class=cell的td
let trLists=tBody.querySelectorAll('tr');
let tdLists=trLists[0].querySelectorAll('td');//6
let len=trLists.length;

let i=0;

addtr.addEventListener('click',function(){
    const trNode=document.createElement('tr');
    const tdNode=document.createElement('td');
    console.log(trNode);

    tBody.appendChild(trNode);
});
