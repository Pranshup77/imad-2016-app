console.log('Loaded!');

//change the text of the main-text file
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
var margingLeft = 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft + 'px';
}
img.onClick = function(){
    var interval = setInterval(moveReft,50);
    //1st line then above line 
    //img.style.marginLeft = '100px';
};