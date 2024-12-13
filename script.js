window.addEventListener('load', () => {
  window.scrollTo(0, 0);
})

///////////////////////////////////////////////////////////////////////////
// For First-Div where colors Collision happens:

let Heading = document.querySelectorAll("h1")[0];
let cont = document.getElementById("container");

function View() {
  Heading.style.cssText = `
            color: transparent; 
            background-color: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(5px);
            -webkit-text-stroke : 1px black;
            transition: All 1s;
        `;
}

function ViewReset() {
  Heading.style.cssText = `
            color: transparent; 
            -webkit-text-stroke : 2px red;
            transition: All 0.7s;
        `;
}

setTimeout(View, 5000);
setTimeout(ViewReset, 5500);
setTimeout(View, 6000);
setTimeout(ViewReset, 6500);
setTimeout(View, 7000);
setTimeout(ViewReset, 7300);
setTimeout(View, 7800);
setTimeout(ViewReset, 8000);
setTimeout(View, 8200);

////////////////////////////////////////////////////////////////////

let NavEle = document.getElementById("NavEle");
let NavEleBox = document.getElementById("NavEleBox");
let BackBtn = document.getElementById("Back-Btn");

NavEle.addEventListener("click", function () {
  NavEleBox.style.cssText = `
            transform : translateX(0vw);
            transition : All 0.5s;
        `;

  NavEle.style.opacity = "0";
});

BackBtn.addEventListener("click", function () {
  NavEleBox.style.cssText = `
            transform : translateX(50vw);
            transition : All 0.5s;
        `;

  NavEle.style.opacity = "1";
});

////////////////////////////////////////////////////////////////////

// Canvas:

let canva = document.getElementById("canva");
let DrawCanva = canva.getContext("2d");

/*DrawCanva.moveTo(50, 50);
DrawCanva.lineTo(500, 250);
DrawCanva.strokeStyle = "red";
DrawCanva.lineWidth = 5
DrawCanva.stroke();*/

function fn(n, r, bg) {
  DrawCanva.beginPath();

  DrawCanva.arc(0, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(100, n, r, 0, Math.PI * 1, true)
  DrawCanva.lineWidth = 3;
  DrawCanva.strokeStyle = "cyan";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(200, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(300, n, r, 0, -Math.PI * 1, true);
  DrawCanva.strokeStyle = "cyan";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(400, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(500, n, r, 0, Math.PI * 1, true);
  //DrawCanva.fillStyle = "blue";
  //DrawCanva.fill();
  DrawCanva.strokeStyle = "cyan";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(600, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(700, n, r, 0, -Math.PI * 1, true)
  DrawCanva.strokeStyle = "cyan";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(800, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(900, n, r, 0, Math.PI * 1, true)
  DrawCanva.strokeStyle = "cyan";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();

  DrawCanva.beginPath();

  DrawCanva.arc(1000, n, r, 0, -Math.PI * 1);
  DrawCanva.strokeStyle = "red";
  DrawCanva.fillStyle = bg;
  DrawCanva.fill();
  DrawCanva.stroke();
}

function fn2(n) {
  fn(100, n, "#100")
  /*fn(120, n, "#150")
  fn(140, n, "#200")
  fn(160, n, "#250")
  fn(180, n, "#300")
  fn(200, n, "#350")
  fn(220, n, "#400")*/
  fn(240, n, "#450")
  /*fn(260, n, "#500")
  fn(280, n, "#550")
  fn(300, n, "#600")
  fn(320, n, "#650")
  fn(340, n, "#700")
  fn(360, n, "#750")
  fn(380, n, "#800")*/
  fn(400, n, "#850")
}

fn2(100)
fn2(90)
fn2(80)
fn2(70)
fn2(60)
fn2(50)
fn2(40)
fn2(30)
fn2(20)
fn2(10)
fn2(1)

////////////////////////////////////////////////////////////

let btn = document.getElementById("move");
let section = document.getElementById("fifth");
let items = document.getElementsByClassName("items");


if(window.innerWidth < 1000){
  items[4].style.display = "none";
  items[5].style.display = "none";
  items[6].style.display = "none";
  items[7].style.display = "none";
}



btn.addEventListener('click', () => {
  items[4].style.display = "flex";
  items[5].style.display = "flex";
  items[6].style.display = "flex";
  items[7].style.display = "flex";
  btn.style.display = "none";
})