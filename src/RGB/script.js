function doYourWork() {
var lable = document.querySelector('.color-mixer .label');
lable.innerHTML = 'hello word';//*单引号中的内容是可以更改的*

var color = 'rgb('+ red + ',' + green + ',' +blue + ')';
lable.innerHTML = color;

var indicator = document.querySelector('.color-mixer .indicator');
console.log(indicator);
indicator.style.backgroundColor = color;//background-color
lable.style.fontSize = '20px';//修改元素的样式
}