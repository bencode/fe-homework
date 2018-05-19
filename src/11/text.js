
function addText() {
    var preview = document.querySelector('.text-editor .preview');
    // 字体颜色
    var colorInput = document.querySelector('.text-editor .color-input');
    var color = colorInput.value;
    // 背景颜色
    var bgColorInput = document.querySelector('.text-editor .bg-color-input');
    var bgColor = bgColorInput.value;
    // 字号
    var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
    var fontSize = fontSizeSelect.value;
    // 文字输入
    var textInput = document.querySelector('.text-editor .text-input');
    var text = textInput.value;
    // 在页面上输出
    var lastHtml = preview.innerHTML;
    preview.innerHTML = lastHtml+'<span style="color:'+color+
    '; background:'+bgColor+'; font-size:'
    +fontSize+'"> '+text+' </span>';
    textInput.value = '';
}
    var addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click',addText);

