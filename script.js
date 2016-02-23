// Your JS goes here


var wrapFirstRow = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
body.appendChild(wrapFirstRow);
wrapFirstRow.style.width = "450px";
wrapFirstRow.style.height = '450px';



for(var i = 0; i < 81; i++){
  var gradientValue = 1 - (i / 90);

  var newDiv = document.createElement('div')
  newDiv.style.cssText = 'width: 50px;';
  newDiv.style.cssText += 'display: inline-block;';
  newDiv.style.cssText += 'height: 50px;';
  newDiv.style.cssText += 'margin-bottom: -4px;';
    if (i % 2 === 0) {
      newDiv.style.backgroundColor = `rgba(62, 208, 200, ${gradientValue})`;
    } else {
      console.log('test');
      newDiv.style.backgroundColor = `rgba(71, 62, 208, ${gradientValue})`;
    }
  document.getElementsByTagName('section')[0]
    .appendChild(newDiv);
}

// var chooseColor = function() {
//   return 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
// };




// function getNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
