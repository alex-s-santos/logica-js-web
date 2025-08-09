let classes = document.querySelector('#classes');
let class1 = document.querySelector('#class1');

class1.addEventListener('click', function() {
   classes.innerHTML = `

    <h3>Seja bem-vindo, digite seu nome</h3>
    <label for="name">Nome: </label>
    <input type="text" id="name1">
    <button class="btn" id="btn1">Executar</button>
    <br>
    <p id="return1" class="return"></p>
    <br>
    <a href="./index.html" class="home">Voltar</a>
   `

   //Lógica
   let btn1 = document.querySelector("#btn1");
   let name = document.querySelector("#name1");
   let return1 = document.querySelector("#return1");

   btn1.addEventListener('click', function(e) {
      e.preventDefault();

      return1.innerHTML = `Olá, ${name.value}, seja bem-vindo ao nosso curso!`;
   });

});