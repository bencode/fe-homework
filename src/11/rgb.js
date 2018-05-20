
    // var lable = document.querySelector('.two .color-mixer .label');
    // var red = document.getElementById('red');
    // red = red.value;
    // var green = document.getElementById('green');
    // green = gerrn.value;
    // var blue = document.qgetElementById('blue');
    // blue = blue.value;
   
    // lable.innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';

    // var indicator = document.querySelector('.two .color-mixer .indicator');
    // indicator.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    function $$(id) {
    return document.getElementById(id);
}
function Color (){
    red = $$("red").value;
    green = $$("green").value;
    blue = $$("blue").value;
    $$('indicator').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $$('label').innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
Color ();