console.log('Loaded!');

//change the text of the main-text file
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
img.onClick = function(){
    var interval = setInterval(moveLeft,100);
    //1st line then above line 
    //img.style.marginLeft = '100px';
};