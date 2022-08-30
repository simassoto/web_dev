window.onload= function(){
let utilizador = document.querySelector('#utilizador');
let conteudo = document.querySelector('#conteudo');
console.log("teste")
utilizador.addEventListener('click', () => {
  conteudo.style.visibility = "visible";
  console.log("teste")
});
}
