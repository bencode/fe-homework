const table=document.querySelector('.table');
const tBody=table.querySelector('tbody');
const td=tBody.querySelector('td');

function app(parentNode,eventType,node,fn){
    parentNode.addEventListener(eventType,(event)=>{
        if(event.target.matches(node)){
            fn.apply(event.target,arguments);
        }
    });
}

app(tBody,'click','.cell',function(){
    this.classList.add('focus');
    this.innerHTML='<div class="ui fluid icon input"><input type="text" class="input-cell"></div>';
    const inputCell=table.querySelector('.input-cell');
    inputCell.focus();
});

app(tBody,'focusout','.input-cell',function(){
    this.parentNode.parentNode.classList.remove('focus');
    const ancestor=this.parentNode.parentNode;
    ancestor.innerHTML='';
});



