Object.prototype.add=function(){
    // 当arguments快速变成一个数组有以下方法
    // 1. 如果支持ES6, 则直接使用 Array.from(arguments)
    // 2. 如果要支持ES5， 则可以使用 [].slice.call(arguments, 0)
    // 3. 如果是ES6，可以直接在函数参数中使用 spread参数：
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const newArr=this.className.split(' ');
    const argArray=Array.from(arguments);
    for (let i=0; i<argArray.length; i++){
        newArr.push(argArray[i])
    }
    const newClassNme=eliminateRepeat(newArr).join(' ');
    this.setAttribute('class',newClassNme);
},

Object.prototype.removeClass=function(){
    // 这个移除class的逻辑有点绕，可以简化
    // 应该是将原class打成数组
    // 然后根据原来的数组，产生一个新的数组，里面的所有元素都不在参数中即可
    // 你可以先用循环来完成
    // 接着尝试使用 数组的 filter 方法来完成
    const oldArr=this.className.split(' ');
    const argArr=Array.from(arguments);
    const newArr=oldArr.filter(function(item){
        return argArr.indexOf(item)===-1;
    });
    const newClassNme=newArr.join(' ');
    this.setAttribute('class',newClassNme);
},

Object.prototype.containClass=function(){
    // 实现的逻辑应正确的
    // 尝试使用数组的 find 方法来实现查找逻辑
    const newArr=this.className.split(' ');
    const arg=Array.from(arguments)[0];
    const flag=newArr.find( function(item) {
        return item===arg;
    });

    if(flag){
        return true;
    }
    else{
        return false;
    }
}

//数组去重
function eliminateRepeat(oldArr){
    var newArr=[];
    for( var i=0; i<oldArr.length; i++){
        var symbol=oldArr.indexOf(oldArr[i],i+1);
        if(symbol===-1){
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}
// 可以使用 newArr的indexOf来弄，这样会简洁些
function eliminateRepeat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
// 你可以做以下尝试
// 1. 尝试把以上逻辑使用 数组的reduce方法来完成
// 2. 尝试使用ES6的 Set 数据结构来完成同样的功能


//reduce方法实现
//这个是我仿照官网上的
function eliminateRepeat(arr){
    var result=arr.sort().reduce( function(newArr, cur) {
        if( newArr.length===0 || newArr[newArr.length-1]!==cur ) newArr.push(cur);
        return newArr;
    },[]);
    return result;
}

//Set对象方法实现
function eliminateRepeat2(arr){
    return [...new Set(arr)];
}
