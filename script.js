// Your JS goes here

var wrapFirstRow = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
body.appendChild(wrapFirstRow);
wrapFirstRow.style.width = "450px";
wrapFirstRow.style.height = '450px';


for(var i = 0; i < 81; i++){
  var newDiv = document.createElement('div')
  newDiv.style.cssText = 'width: 50px;';
  newDiv.style.cssText += 'display: inline-block;';
  newDiv.style.cssText += 'height: 50px;';
  newDiv.style.cssText += 'margin-bottom: -4px;';
    if (i % 2 == 0) {
      newDiv.style.cssText += 'background: black';
    } else {
      newDiv.style.cssText += "background: red";
    }
  document.getElementsByTagName('section')[0]
    .appendChild(newDiv)
}

var oddDivs = document.querySelectorAll('div:nth-of-type(odd)');
