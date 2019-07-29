var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

// chooses random coordinates
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log(`targetX: ${targetX}`);
console.log(`targetY: ${targetY}`);


var win = true;
function loc(event){
  if (win == true){
    console.log(`mouseX: ${event.clientX}`, `mouseY: ${event.clientY}`)
    var mouseX = event.clientX
    var mouseY = event.clientY
    var dist = distance(targetX, targetY, mouseX, mouseY)
    box.style.backgroundColor = `rgb(0, 0, ${255 - dist})`
    if (dist <= 30){
      box.style.backgroundColor = `rgb(0, 255, 0)`;
      win = false
    }
  }
}

box.addEventListener("mousemove", loc);

function distance(targetX, targetY, mouseX, mouseY){
  var x = targetX - mouseX;
  var y = targetY - mouseY;
  var z = Math.sqrt( targetX*mouseX + targetY*mouseY );
  console.log(z)
  return z
}
