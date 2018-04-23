/*
我们是这样使用classList的

取得一个元素
const elm = document.querySelector('.myselect');
// 其实这个元素是 继承自 Element的
https://developer.mozilla.org/en-US/docs/Web/API/Elemen

所以可以给 Element.prototype 添加属性或方法来扩展。
*/


// 我们先来一个简单的

Element.prototype.addClass = function(cn) {
  console.log('给元素添加class', this, cn);
};

// 测试下
const elm = document.querySelector('body');
elm.addClass('for-test');


// 但是我们现在是想通过classList这个对象来实现
// 你可能想到这样的方式:

/*
Element.prototype.classList = {
  add(cn) {
    console.log('但是这种方式是得不到上下文this的');
  }
};


所以咱们得使用一个新的API，叫Object.defineProperty，定义一个'属性方法'来实现
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
*/

Object.defineProperty(Element.prototype, 'myclassList', {
  get() {
    const elm = this;  // 当前的元素
    return {
      add: function(cn) {
        addClass(elm, cn);
      }
    }
  }
});


function addClass(elm, cn) {
  console.log(`给元素添加class`, elm, cn);
}

// 再试一下

elm.myclassList.add('hello');