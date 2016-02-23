// Your JS goes here


// var wrapFirstRow = document.createElement('section');
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(wrapFirstRow);
// wrapFirstRow.style.width = "450px";
// wrapFirstRow.style.height = '450px';


function chooseColor() {
  return 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
};


function flashing () {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = '';
  var wrapFirstRow = document.createElement('section');

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
          newDiv.style.cssText += `background: ${chooseColor()}`;
        } else {
          newDiv.style.cssText += "background: " + chooseColor();
        }
      document.getElementsByTagName('section')[0]
        .appendChild(newDiv)
    }
}
flashing();
setInterval(flashing, 2000);


// var addButton = document.createElement('button');
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(addButton);
//
// var addButtonText = document.createTextNode('Press to Start');
// var button = document.querySelector('button');
// button.appendChild(addButtonText);

// var clickForFlashing = document.querySelector('button');
// clickForFlashing.addEventListener('click', function () {
//
// });
