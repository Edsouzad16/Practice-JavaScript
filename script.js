let count = 0;

const display =
document.getElementById("count");

function update(){
  display.textContent = count;
}

function increase(){
  count++;
  update();
}

function decrease(){
  count--;
  update();
}

function resetCounter(){
  count = 0;
  update();
}

document
.querySelector("form")
.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name =
  document.querySelector("input").value;

  if(name === ""){
    alert("Digite seu nome");
    return;
  }

  alert("Mensagem enviada!");
});