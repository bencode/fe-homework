const table=document.querySelector('.table');
const tBody=table.querySelector('tbody');
const td=tBody.querySelector('td');

function app(parentNode,eventType,node,fn){
    parentNode.addEventListener(eventType,(event)=>{
      // 这个事件代理函数有点小bug, 可能当目标元素(.cell)有子节点时，就不灵了。
      // 想办法还原这个bug，并尝试解决。
      // 你可以先实现下面要求的closest函数后再来思考这个问题。
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
    // 使用在jquery中，一般不会使用parentNode.parentNode这种和节点层次相关的方法，因为容易出bug
    // 而是会使用 $(this).closest('.cell') 来直接找到指定选择器的父节点
    // 尝试实现closest函数，函数签名为: closest(elm, selector) -> {Element}
    const ancestor=this.parentNode.parentNode;
    ancestor.innerHTML='';
});



